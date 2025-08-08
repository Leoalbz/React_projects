import { Link, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { productService } from '../MOCK/service';
import type { Products } from '../types/typeProductMocks';
import ComponentNavBar from '../navBar';



/*import { Link, useNavigate, useParams } from 'react-router';
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

export default ProductDetail;*/
type NavBar = {
  tituloPagina: string;
  item1: string;
  item2: string;
  item3: string;
  carrito?: number;
  children: any;
}
type DetalleProducto = {
  agregarCarrito: (prize: number) => void;
  quitarCarrito: (prize: number) => void;
  carrito:number;
}

function ProductDetail(props: DetalleProducto)  {
  const { carrito , agregarCarrito, quitarCarrito } = props;

  const navBar: NavBar = {
    tituloPagina: 'Mercado Libre',
    item1: 'Lo mas visto',
    item2: 'Lo mas vendido',
    item3: 'Proximamente'
  } 

  const { id } = useParams<{ id:string }>();
  const {tituloPagina, item1, item2, item3} = navBar;
  

  const productId = Number(id);
  if (isNaN(productId)) {
    return <p>ID de producto inválido</p>;
  }
  const { data: product, isLoading, isError } = useQuery<Products>({
    queryKey: ['product', productId],
    queryFn: () => productService.getProductById(productId),
  });

  if (isLoading) return <p>Cargando detalle...</p>;
  if (isError || !product) return <p>Producto no encontrado</p>;

  return (
    <>
      <ComponentNavBar
        tituloPagina={tituloPagina}
        item1={item1}
        item2={item2}
        item3={item3}
        carrito={carrito}
      />

      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto p-8 bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row gap-12">
          <div className="flex-shrink-0">
            <img
              src={product.image}
              alt={product.title}
              className="w-full md:w-96 h-auto rounded-lg shadow-lg object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                {product.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {product.description}
              </p>
              <p className="text-3xl font-bold text-green-600 mb-4">
                ${product.price}
              </p>
              <span className="inline-block px-4 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium uppercase tracking-wide">
                {product.category}
              </span>
            </div>
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => agregarCarrito(product.price)}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg shadow transition"
              >
                Agregar al carrito
              </button>
              <button
                onClick={() => quitarCarrito(product.price)}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition"
              >
                Quitar del carrito
              </button>
              <Link
                to="/"
                className="ml-auto bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-lg shadow transition"
              >
                Volver al inicio
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default ProductDetail;