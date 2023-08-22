import React, { useContext } from 'react'
import "./CartItem.css"
import { CartContext } from '../../context/CartContext'

function CartItem({id, nombre, precio,cantidad}) {
  const {borrarItem} =useContext(CartContext)
  
  return (
    <div className='cartItem' >
        <p className='customItem'>Producto: {nombre}</p>
        <p className='customItem'>Precio: {precio}</p>
        <p className='customItem'>Cantidad: {cantidad}</p>
        <p className='customItem'>Total: ${cantidad*precio}</p>
    <button onClick={() => borrarItem() } className='deleteButton'> X </button> 
    </div>   
  )
}
export default CartItem