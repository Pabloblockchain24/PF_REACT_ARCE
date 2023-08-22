import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { toast } from 'react-toastify';


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagina, setPagina] = useState("");
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);
    const collectionRef = categoriaId
      ? query(
          collection(db, "productos"),
          where("categoria", "==", categoriaId)
        )
      : collection(db, "productos");
    getDocs(collectionRef)
      .then((response) => {
        const productosObtenidos = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(productosObtenidos);
        categoriaId === undefined
          ? setPagina("TODOS LOS PRODUCTOS")
          : setPagina(categoriaId);
      })
      .catch(() => {
        toast.error("error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoriaId]);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
        <h3 className="customHeader">{pagina}</h3>
        <ItemList productos={productos} />
      </>
    );
  }
};
export default ItemListContainer;
