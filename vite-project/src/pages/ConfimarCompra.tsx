import { Link } from "react-router";

type Props = {
  carritoTotal: number;
};

export default function ConfirmarCompra({ carritoTotal }: Props) {
  return (
    <div>
      <h2>Monto total de la compra: ${carritoTotal}</h2>
        <Link to={'/compra_realizada'}>¿Deseás confirmar la compra?</Link>
    </div>
  );
}