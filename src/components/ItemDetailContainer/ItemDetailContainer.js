import React from 'react'
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from '../Loader/Loader';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {getDoc, doc} from "firebase/firestore"
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)
    const docRef = doc(db, "productos", itemId)
    getDoc(docRef)
      .then(response => {
          const data= response.data()
          const productoAdaptado = {id: response.id, ...data}
          setProducto(productoAdaptado)
      })
      .catch(() => {
        toast.error("error");
      })
      .finally(()=> {setLoading(false)})
  }, [itemId])

  if (loading) {
    return (
      <Loader />
    )
  } else {
    return (
      <div className='customItemDetail'>
        <ItemDetail {...producto} />
      </div>
    )
  }
}


export default ItemDetailContainer