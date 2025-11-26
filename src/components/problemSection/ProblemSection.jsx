import styles from "./ProblemSection.module.css";
import mujer from "../../assets/mujer.png";
import senores from "../../assets/senores.png";
import fondo from "../../assets/fondo.png";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { GrCatalogOption } from "react-icons/gr";
import { CgFileDocument } from "react-icons/cg";
import { BsBoxSeam } from "react-icons/bs";

function ProblemSection() {
    return(
        <div className={ styles.problemSection }>
            <section className={ styles.clientSection }>
                <div className={ styles.clientImg }>
                    <img src={mujer} alt="" className={styles.img}/>
                </div>
                <div className={ styles.infoContainer }>
                    <h2>¿BUSCAS UN PRODUCTO?</h2>
                    <p>Nora se encarga de:</p>
                    <ul className={ styles.listContainer }>
                        <li className={ styles.itemContainer }>
                            <div>
                                <FaMagnifyingGlass style={{ fontSize: 16 }}/>
                            </div>
                            <p>Encontrar tu producto</p>
                        </li>
                        <li className={ styles.itemContainer }>
                            <div>
                                <FaCheck style={{ fontSize: 16 }}/>
                            </div>
                            <p>Realizar la compra</p>
                        </li>
                        <li className={ styles.itemContainer }>
                            <div>
                                <MdDeliveryDining style={{ fontSize: 16 }}/>
                            </div>
                            <p>Entregar a domicilio</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={ styles.shopSection }>
                <div className={ styles.infoShopContainer }>
                    <h2>¿VENDES PRODUCTOS?</h2>
                    <p>Nora se encarga de:</p>
                    <ul className={ styles.listContainer }>
                        <li className={ styles.itemContainer }>
                            <div style={{color: "black", backgroundColor:"white"}}>
                                <GrCatalogOption style={{ fontSize: 16 }}/>
                            </div>
                            <p>Mostrar tu catálogo</p>
                        </li>
                        <li className={ styles.itemContainer }>
                            <div style={{color: "black", backgroundColor:"white"}}>
                                <CgFileDocument style={{ fontSize: 16 }}/>
                            </div>
                            <p>Gestionar tus pedidos</p>
                        </li>
                        <li className={ styles.itemContainer }>
                            <div style={{color: "black", backgroundColor:"white"}}>
                                <BsBoxSeam style={{ fontSize: 16 }}/>
                            </div>
                            <p>Entregar a tus clientes</p>
                        </li>
                    </ul>
                </div>
                 <div className={ styles.shopImg }>
                    <img src={senores} alt="" className={styles.imgShop}/>
                </div>
            </section>
        </div>
    );
};

export default ProblemSection;