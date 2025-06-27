import styles from './CardProductstyles.module.css'


type CardProductProps = {
    title : string;
    prize: number;
    src: string;
    description: string;
    carrito?: number;
    agregarCarrito: (prize: number) => void;
    quitarCarrito: (prize: number) => void;
    categoria?: string;
}


function CardProduct (props: CardProductProps){
    const { title, prize, src, description, agregarCarrito, quitarCarrito } = props;



    return (
        <article className={styles.cardProductSection}>
            <img src={src} className={styles.imageProduct}/>
            <div className={styles.cardProductContent}>
                <h2 className={styles.tituloProducto}>{title}</h2>
                <h3 className={styles.prizeProducto}>{prize}</h3>
                <p>{description}</p>
                <button className={styles.comprarProducto} onClick={() => agregarCarrito(prize)}>Agregar</button><button onClick={() => quitarCarrito(prize)}>Quitar</button>
            </div>
        </article>
    );
}

export default CardProduct;