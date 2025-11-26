import React, { useEffect } from "react";
import { CiCircleCheck } from "react-icons/ci";
import styles from "./ConfirmationPage.module.css";
import { LuCheck } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { PiHeadset } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function ConfirmationPage() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 60000);
    }, []);

    return (
        <main className={ styles.confirmationPage }>
            <div className={ styles.confirmationSection }>
                <CiCircleCheck className={ styles.iconCheck }/>
                <h2 style={{ fontSize: '24px', fontWeight: '900'}}>¡Gracias por contactarnos!</h2>
                <p>Hemos recibido tu solicitud y te responderemos lo antes posible</p>
            </div>
            <div className={ styles.pasosSection }>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '600px'}}>
                    <h2 style={{ fontSize: '32px', fontWeight: '900', color: 'white'}}>Siguientes <br /> pasos.</h2>
                    <div className={ styles.pasoContainer }>
                        <LuCheck className={ styles.iconPaso }/> <p>Revisaremos tu informacion</p>
                    </div>
                    <div className={ styles.pasoContainer }>
                        <CiMail className={ styles.iconPaso }/> <p>Te enviaremos un correo de confirmación</p>
                    </div>
                    <div className={ styles.pasoContainer }>
                        <PiHeadset className={ styles.iconPaso }/> <p>Un asesor se contactará contigo</p>
                    </div>
                </div>
                <a className={ styles.buttonBack } href='/'>
                    VOLVER A LA PÁGINA PRINCIPAL
                </a>
            </div>
        </main>
    );
}

export default ConfirmationPage;