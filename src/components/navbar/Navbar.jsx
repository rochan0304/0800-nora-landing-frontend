import { useState } from "react";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
    return(
        <nav className={ styles.navbarContainer }>
            <img src={logo} alt="Logo de 0-800 Nora" className={ styles.logo }/>
            <a className={ styles.boton } href="https://wa.me/584226530809" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className={ styles.iconPhone }/>
                <p style={{height: 14, display: "flex", alignItems: "center" }}>
                    COMPRAR CON NORA
                </p>
            </a>
        </nav>
    );
}

export default Navbar;