import "./ItemDetail.css"
import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({id,nombre,img,precio,stock}) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const {agregarItem} =useContext(CartContext)

    const handleOnAdd = (cantidad) => {
        setCantidadAgregada(cantidad)
        const item = {id, nombre, precio}
        agregarItem(item, cantidad)
    }
    
  return (
        <article className="cardItem">
            <header> <h2> {nombre}</h2> </header>
            <picture className='centrarItem'> <img src={img} alt={nombre} className='ImgSize' /> </picture>
            <section className='centrarItem'>
                <p className="customInfo">Precio: ${precio}</p>
                <p className="customInfo">Stock disponible: {stock}</p>
            </section>
            <footer className='customFooter'>
                { 
                    cantidadAgregada > 0 ? 
                    (
                    <div className='customButtons'>
                    <Link to="/cart" className='customTerminarCompra'>TERMINAR COMPRA</Link>
                    <Link to="/" className='customSeguirComprando'> SEGUIR COMPRANDO </Link>
                    </div>
                    )
                    :  
                    (<ItemCount inicial={1} stock={stock} onAdd={handleOnAdd}/>)
                }
            </footer>
        </article>
    )
}
export default ItemDetail