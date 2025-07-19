import { useContext } from 'react';
import { CarritoContext } from './context/CarritoContext';



export function Carrito(children: number) {
  const context = useContext(CarritoContext);
  if (!context) {
       return (
        <>
        <h1>No hay elementos en el carrito</h1>
        </>
       )
  }
//  const carritoTotal = context;
  return (
    <>
    <h1>Monto total: ${children}</h1>
    </>
  );}