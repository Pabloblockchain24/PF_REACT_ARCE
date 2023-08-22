import React from 'react'
import "./Item.css"
import { Link } from "react-router-dom";

const Item = ({id,nombre,img, precio, stock}) => {
  return (
        <article className="customCard">
            <header> <h6> {nombre}</h6> </header>
            <picture className='customItem'>
                <img src={img} alt={nombre} className='ImgSize' />
            </picture>
            <section className="customItem">
                <p className="customInfo">Precio: ${precio}</p>
                <p className="customInfo">Stock disponible: {stock}</p>
            </section>
            <footer className='customFooter'>
                <Link to={`/item/${id}`} className='customButton'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item