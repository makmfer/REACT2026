import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Inicio from "./components/layouts/Inicio"; // Importamos el componente
import ItemListContainer from "./components/products/ItemListContainer";
import DetalleProducto from "./components/products/DetalleProducto";
import Contacto from "./components/contacto/Contacto";
import './App.css';

const App = () => {
   return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Inicio />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<DetalleProducto/>} />
          <Route path='/carrito' element={<h1 style={{ textAlign: 'left' }}>Carrito</h1>}/>
        </Route>
      </Routes>
    </>   
  );
}

export default App;