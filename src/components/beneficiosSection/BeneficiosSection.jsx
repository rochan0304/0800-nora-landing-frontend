import React from "react";
import styles from "./BeneficiosSection.module.css";
import { LuHouse } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { LuTicketPercent } from "react-icons/lu";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosTrendingUp } from "react-icons/io";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineDeliveryDining } from "react-icons/md";

function BeneficiosSection() {
    return(
        <div className={ styles.beneficiosContainer }>
            <section className={ styles.clientSection }>
                <h2 className={ styles.title }>BENEFICIOS PARA NUESTROS CLIENTES:</h2>
                <ul className={ styles.list }>
                    <li>
                        <LuHouse className={ styles.icon } /> Entregas a domicilio
                    </li>
                    <li>
                        <FaRegClock className={ styles.icon } /> Ahorro de tiempo
                    </li>
                    <li>
                        <LuTicketPercent className={ styles.icon } /> Variedad de ofertas
                    </li>
                    <li>
                        <IoBagHandleOutline className={ styles.icon } /> Compras personalizadas
                    </li>
                </ul>
            </section>
            <section className={ styles.clientSection }>
                <h2 className={ styles.title }>BENEFICIOS PARA NUESTROS ALIADOS:</h2>
                <ul className={ styles.list }>
                    <li>
                        <HiOutlineUserGroup className={ styles.icon } /> Aumento de cartera de clientes
                    </li>
                    <li>
                        <IoIosTrendingUp className={ styles.icon } /> Aumento de ventas
                    </li>
                    <li>
                        <BsBoxSeam className={ styles.icon } /> Flexibilidad en pedidos
                    </li>
                    <li>
                        <MdOutlineDeliveryDining className={ styles.icon } /> Eficiencia operativa
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default BeneficiosSection;