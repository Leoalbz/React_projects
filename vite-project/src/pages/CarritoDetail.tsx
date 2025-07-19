import { Link } from "react-router";

type CarritoDetailType = {
  carritoTotal?: number;
};

export default function CarritoDetail({ carritoTotal }: CarritoDetailType) {
  return (
    <div>
      <h1>Proceso de compra</h1>
      <p>Usted está por comprar:</p>
      <p>Total: ${carritoTotal}</p>
      <Link to="/confirmar_compra">Confirmar compra</Link>
      <br />
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}