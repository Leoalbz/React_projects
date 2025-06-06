import styles  from './CardProductStyles.module.css'

type NavBarProps = {
   tituloPagina: string;
   item1: string;
   item2: string;
   item3: string; 
}

function ComponentNavBar(props: NavBarProps){
    const {tituloPagina , item1 ,item2, item3} = props;
    return (
    <div className={styles.NavBarHeader}>
    <h1 className={styles.titlePagestyle}>{tituloPagina}</h1>
    <div className={styles.navBarContainer}>
    <ul className={styles.navBarstyle}>
        <li className={styles.itemsStyle}>{item1}</li>
        <li className={styles.itemsStyle}>{item2}</li>
        <li className={styles.itemsStyle}>{item3}</li>
    </ul>
    </div>
            </div>
    )
}

export default ComponentNavBar;