import { Link, useNavigate, useParams } from 'react-router';
import { getProductById } from '../getProductById';
import type { Products } from '../types/typeProduct';
function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  if (!id) {
    navigate('/');
    return null;
  }

  const numericId = parseInt(id);
  const product: Products | undefined = getProductById(numericId);

  if (!product) {
    return (
      <div>
        <p>Producto no encontrado</p>
        <Link to="/">Volver</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.src} alt={product.title} width={300} />
      <p><strong>Descripción:</strong> {product.description}</p>
      <p>Precio: ${product.prize}</p>
      <Link to="/">Volver</Link>
    </div>
  );
}

export default ProductDetail;