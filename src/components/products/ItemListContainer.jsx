import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import estilos from "./ItemListContainer.module.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Petición al archivo local en /public/datos/productos.json
    fetch('/datos/productos.json')
      .then(res => {
        if (!res.ok) throw new Error("No se pudo cargar productos");
        return res.json();
      })
      .then(datos => setProductos(datos))
      .catch(err => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) 
    return <div className={estilos.statusMessage}>Cargando productos...</div>;

  if (error) 
    return <div className={estilos.statusMessage}>Error: {error}</div>;
  //muestro los productos
  return (
    <section className={estilos.container}>
      <h1 >Nuestra Colección</h1>
      <ItemList productos={productos} />
    </section>
  );
};

export default ItemListContainer;