import "./Checkout.css"
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import Loader from '../Loader/Loader'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { db } from '../../services/firebase/firebaseConfig'
import { Timestamp, addDoc, documentId, writeBatch } from 'firebase/firestore'
import { getDocs, collection, query, where} from "firebase/firestore"
import { toast } from 'react-toastify'

function Checkout() {
    const [ordenId, setOrdenId] = useState("")
    const [loading, setLoading] = useState(false)
    const {cart, totalCompra, limpiarCart} = useContext(CartContext)

    const crearOrden = async ({nombreUsuario, telefono, email}) => {
        setLoading(true)
        try{
            const objOrden= {
                comprador: {
                    nombreUsuario, telefono, email
                },
                items: cart,
                totalCompra: totalCompra,
                date: Timestamp.fromDate( new Date())
            }
            const batch = writeBatch(db)
            const fueraStock = []
            const ids = cart.map(prod => prod.id)
            const productosRef = collection(db, "productos")
            const productosAgregadosDesdeFirestore = await getDocs(query(productosRef, where(documentId(), "in", ids)))
            const {docs} = productosAgregadosDesdeFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productosAgregadosAlCarro = cart.find( prod => prod.id === doc.id)
                const cantidadProductos = productosAgregadosAlCarro?.cantidad
                if(stockDb >= cantidadProductos){
                    batch.update(doc.ref, { stock : stockDb - cantidadProductos})
                }else{
                    fueraStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(fueraStock.length === 0){
                await batch.commit()
                const ordenRef = collection(db, "ordenes")
                const ordenAgregada = await addDoc(ordenRef, objOrden)
                setOrdenId(ordenAgregada.id)
                limpiarCart()
            }else{
                toast("Hay productos que estan fuera de stock")
            }
        }
        catch(error){
            toast(error)
        }
        finally { 
            setLoading(false)
        } 
    }
    if(loading){
        return (<Loader />)   
    }
    if(ordenId){
        return ( 
        <div className='customSuccessMsg'>
            <h3> ¡ COMPRA EXITOSA ! </h3>
            <h4> El id de su orden es: {ordenId} </h4>
        </div>
        )
    }
    return( <CheckoutForm onConfirm={crearOrden} />)
}
export default Checkout