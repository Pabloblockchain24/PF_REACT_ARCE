import "./Cart.css"
import CartItem from '../CartItem/CartItem'
import React, { useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

function Cart() {
    const { cart, limpiarCart, totalUnidades, totalCompra} =useContext(CartContext)
    if (totalUnidades === 0){
        return(
            <div className='cartContainer'>
                <h1 >No hay items en el carrito</h1>
                <Link to="/" className='botonFooter'> Ir a inicio </Link>
            </div>
        )
    }
    return (
        <div className='cartContainer'>
            <h2>Tus compras</h2>
            {cart.map( p => <CartItem key={p.id} {...p} />) }
            <h3>Total: ${totalCompra.toFixed(2)}</h3>
            <div className='footerCart'>
            <button onClick={() => limpiarCart() } className='botonFooter'> Limpiar Carrito</button>
            <Link to="/checkout" className='botonCheckout'> Checkout </Link>
            <Link to="/" className='botonFooter'> Ir a inicio </Link>
            </div>
        </div>
        )
}

export default Cart