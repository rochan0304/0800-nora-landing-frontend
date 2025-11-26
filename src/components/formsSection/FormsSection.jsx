import React, { useState } from "react";
import styles from "./FormsSection.module.css";
import FormClient from "./forms/FormClient";
import FormShop from "./forms/FormShop";
import { BsShopWindow } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";

function FormsSection( { option } ) {
    const [ optionForm, setOptionForm ] = useState(option || 'client');
    const [ colorBoton, setColorBoton ] = useState({
        client: '#FFE13A',
        clientText: 'black',
        shop: '#1B1B1B',
        shopText: '#777777'
    });

    const handleOption = ( currentOption ) => {
        if (currentOption === 'client') {
            setColorBoton({
                client: '#FFE13A',
                clientText: 'black',
                shop: '#1B1B1B',
                shopText: '#777777'
            });
        } else {
            setColorBoton({
                client: '#1B1B1B',
                clientText: '#777777',
                shop: '#FFE13A',
                shopText: 'black'
            });
        }
        setOptionForm( currentOption );
    }

    return (
        <div className={ styles.formsSection}>
            <div style={{maxWidth: "600px", display: 'flex', flexDirection: 'column', gap: '30px'}}>
                <div className={ styles.optionButtons }>
                    <div className={ styles.button } style={{backgroundColor: colorBoton.client, color: colorBoton.clientText }} name="client" onClick={ () => handleOption('client')}>
                        <IoBagHandleOutline style={{fontSize: '24px'}}/>
                        Clientes
                    </div>
                    <div className={ styles.button } style={{backgroundColor: colorBoton.shop, color: colorBoton.shopText }} name="shop" onClick={ () => handleOption('shop')}>
                        <BsShopWindow style={{fontSize: '24px'}}/>
                        Aliados
                    </div>
                </div>

                { optionForm === 'client' && <FormClient />}
                { optionForm === 'shop' && <FormShop />}
            </div>
        </div>
    )
}

export default FormsSection;