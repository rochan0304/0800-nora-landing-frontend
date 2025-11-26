import styles from "./HeaderSection.module.css";

function HeaderSection() {
    return(
        <header className={ styles.headerSection }>
            <h1 className={ styles.title }>0-800 Nora: tu servicio de personal shopper de confianza.</h1>
            <p className={ styles.parrafo }>
                Tanto si eres un cliente buscando un producto específico, 
                como si eres una marca que quiere llegar a más clientes. 
                0-800 Nora se encarga de que la compra suceda.
            </p>
        </header>
    );
};

export default HeaderSection;