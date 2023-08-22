import React from 'react'
import "./CartItem.css"

function CartItem({id, nombre, precio,cantidad, borrarItem}) {
  
  return (
    <div className='cartItem' >
        <p className='customItem'>Producto: {nombre}</p>
        <p className='customItem'>Precio: {precio}</p>
        <p className='customItem'>Cantidad: {cantidad}</p>
        <p className='customItem'>Total: ${cantidad*precio}</p>
    </div>   
  )
}
export default CartItem