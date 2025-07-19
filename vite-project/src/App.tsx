import { useState } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/
import CardProduct from "./CardProduct"
import CardProductContainer from "./CardProductContainer"
import ComponentNavBar from './navBar'
import SearchBar from './SearchBar'
import useSearch from './hooks/useSearch'
import CheckBox from './CheckBox'
import {response, response2, response3 } from './productosMockeados';
import CarritoDetail from './pages/CarritoDetail'
import ConfirmarCompra from './pages/ConfimarCompra'
import { Route, Routes } from 'react-router'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFoundPage.tsx'
import CompraRealizada from './pages/CompraRealizada.tsx'


type NavBar = {
  tituloPagina: string;
  item1: string;
  item2: string;
  item3: string;
  carrito?: number;
  children: any;
}

const navBar: NavBar = {
  tituloPagina: 'Mercado Libre',
  item1: 'Lo mas visto',
  item2: 'Lo mas vendido',
  item3: 'Proximamente'
} 


function App() {
  const [carrito, setCarritoCount] = useState(0);
  const { mostPopular } = response;
  const {bestSellers} = response2;
  const {newSoon} = response3;
  const {tituloPagina, item1, item2, item3} = navBar;
  const [searchParams, setSearchParams] = useSearch();
  

  const agregarCarrito = (prize: number) => {
  setCarritoCount((prev) => prev + prize);
};

  const quitarCarrito = (prize: number) => {
  setCarritoCount((prev) => (prev - prize));
};

  const titleValue = searchParams.get('title') ?? '';
  const categoriaValue = searchParams.get('categoria') ?? '';
  const categoriasElegidas = categoriaValue ? categoriaValue.split(',') : [];

  return (
    <>
      <Routes>
        <Route path='/' element={
        <>
      <ComponentNavBar 
      tituloPagina={tituloPagina} 
      item1={item1} 
      item2={item2} 
      item3={item3} 
      carrito={carrito}/>
      <SearchBar query={titleValue} setSearchParams={setSearchParams}/>
      <CheckBox categoriasElegidas={categoriasElegidas} setSearchParams={setSearchParams}/>
     <CardProductContainer 
     sectionTitle={mostPopular.sectionTitle} 
     descriptionTitle={mostPopular.descriptionTitle}>
      {mostPopular.products.filter((product) => product.title.includes(titleValue)).filter((product) => categoriasElegidas.length === 0 || categoriasElegidas.includes(product.categoria ?? '')).map((product) => {
        return (
             <CardProduct 
             key={product.id}
             id={product.id} 
             title={product.title} 
             prize= {product.prize} 
             description={product.description}
             src={product.src}
             agregarCarrito={agregarCarrito}
             quitarCarrito={quitarCarrito}
             categoria={product.categoria}
               />
      )}
              )}
     </CardProductContainer>
     <CardProductContainer 
     sectionTitle={bestSellers.sectionTitle} 
     descriptionTitle={bestSellers.descriptionTitle}>
      {bestSellers.products.filter((product) => product.title.includes(titleValue)).filter((product) => categoriasElegidas.length === 0 || categoriasElegidas.includes(product.categoria ?? '')).map((product) => {
        return (
             <CardProduct 
             key={product.id} 
             id={product.id}
             title={product.title} 
             prize= {product.prize} 
             description={product.description}
             src={product.src} 
             agregarCarrito={agregarCarrito}
             quitarCarrito={quitarCarrito} 
             categoria={product.categoria}/>
             )
    }
              )}
     </CardProductContainer>
     <CardProductContainer 
     sectionTitle={newSoon.sectionTitle} 
     descriptionTitle={newSoon.descriptionTitle}>
      {newSoon.products.filter((product) => product.title.includes(titleValue)).filter((product) => categoriasElegidas.length === 0 || categoriasElegidas.includes(product.categoria ?? '')).map((product) => {
        return (
             <CardProduct 
             key={product.id} 
             id={product.id}
             title={product.title} 
             prize= {product.prize} 
             description={product.description}
               src={product.src} 
               agregarCarrito={agregarCarrito}
               quitarCarrito={quitarCarrito}
               categoria={product.categoria}
               />
      )}
              )}
     </CardProductContainer> 
     </>
    } 
    />
     <Route path="/carrito" element={<CarritoDetail carritoTotal={carrito} />} />
        <Route path="/confirmar_compra" element={<ConfirmarCompra carritoTotal={carrito} />} />
        <Route path='/' element={<App />} />
        <Route path='/producto/:id' element={<ProductDetail />}/>
        <Route path='*' element={<NotFound />}/>
        <Route path='/compra_realizada' element={<CompraRealizada />}/>  
        </Routes>
    </>
    );
}




export default App;
