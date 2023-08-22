import React from 'react'
import { useState } from 'react'
import { Input } from '@chakra-ui/react'
import "./CheckoutForm.css"

function CheckoutForm({onConfirm}) {
    const [nombreUsuario, setNombreUsuario] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")


    const handleConfirm = (e) => {
        e.preventDefault()
        const datoUsuario = {nombreUsuario, telefono, email}
        onConfirm(datoUsuario)
    }

  return (
    <div>
        <form onSubmit={handleConfirm} className='formContainer'>
            <h2 className='centrarCheckout'>Checkout</h2>
            <label className="formItem"> 
                Nombre: 
                <Input placeholder='Pablo Arce' type="text" value={nombreUsuario} onChange={({target}) => setNombreUsuario(target.value)} required/> 
            </label>
            <label className="formItem"> 
                Telefono: 
                <Input placeholder="+569 1234 5678" type="text" value={telefono} onChange={({target}) => setTelefono(target.value)} required/> 
            </label>
            <label className="formItem"> 
                Email:
                <Input placeholder="nombreapellido@gmail.com" type="email" value={email}  onChange={({ target}) => setEmail(target.value)} required/> 
            </label>
            <button type="submit" className='buttonCrearOrden'> CREAR ORDEN </button>
        </form>

    </div>
  )
}

export default CheckoutForm