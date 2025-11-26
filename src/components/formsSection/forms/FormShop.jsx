import React, { useState } from "react";
import styles from "./Form.module.css";
import { FaCircle } from "react-icons/fa";
import { postTienda } from "../../../api/tienda.api";
import ErrorText from "../../ErrorText";
import { useNavigate } from "react-router-dom";

function FormShop() {
    const [ formData, setFormData ] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        nombre_negocio: '',
        productos: [],
        otro_producto: '',
        ubicacion: '',
        otro_ubicacion: '',
        interes: '',
        otro_interes: '',
        beneficios: '',
        reunion: ''
    });

    const navigate = useNavigate();

    const [ errors, setErrors ] = useState([]);

    const handleCheckboxes = (e) => {
        const { value, name, checked } = e.target;

        if (checked) {
            setFormData({
                ...formData,
                [name]: [...formData[name], value]
            });

            setErrors(prevErrors => prevErrors.filter((error) => error.type !== 'alternative_grouped'));
        } else {
            setFormData({
                ...formData,
                [name]: formData[name].filter((key) => key !== value)
            });
        }
        console.log(formData);
    };

    const handleTexts = (e) => {
        const { value, name } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors(prevErrors => prevErrors.filter((error) => error.path !== name ));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        try {
            const response = await postTienda(formData);
            navigate('/verify');
        } catch (err) {
            if (err.response && err.response.data && err.response.data.errors) {
                setErrors(err.response.data.errors);
            } else {
                console.error('Ocurrio un error inesperado!')
            }
        }
    };

    const PRODUCTOS = [
        { id: 'automotriz', label: 'Automotriz', value: 'automotriz' },
        { id: 'bisuteria', label: 'Bisutería', value: 'bisuteria' },
        { id: 'escolar', label: 'Escolar', value: 'escolar' },
        { id: 'hogar', label: 'Hogar', value: 'hogar' },
        { id: 'mascotas', label: 'Mascotas', value: 'mascotas' },
        { id: 'ropa', label: 'Ropa', value: 'ropa' },
        { id: 'salud', label: 'Salud', value: 'salud' },
        { id: 'tecnologia', label: 'Tecnología', value: 'tecnologia' },
    ];

    const LUGARES = [
        { id: 'baruta', label: 'Baruta', value: 'baruta' },
        { id: 'chacao', label: 'Chacao', value: 'chacao' },
        { id: 'el_hatillo', label: 'El Hatillo', value: 'el hatillo' },
        { id: 'guarenas', label: 'Guarenas', value: 'guarenas' },
        { id: 'guatire', label: 'Guatire', value: 'guatire' },
        { id: 'libertador', label: 'Libertador', value: 'libertador' },
        { id: 'los_teques', label: 'Los Teques', value: 'los teques' },
        { id: 'sucre', label: 'Sucre', value: 'sucre' },
        { id: 'vargas', label: 'Vargas', value: 'vargas' },
    ];

    const INTERESES = [
        { id: 'aumentar_ventas', label: 'Aumentar ventas', value: 'aumentar ventas' },
        { id: 'promocionar_prodcutos', label: 'Promocionar prodcutos', value: 'promocionar productos' },
        { id: 'recibir_pedidos', label: 'Recibir pedidos por WhatsApp', value: 'recibir pedidos' },
    ];

    const BENEFICIOS = [
        { id: 'beneficioSi', label: 'Sí', value: 'si' },
        { id: 'beneficioNo', label: 'No', value: 'no' },
        { id: 'beneficioDepende', label: 'Depende', value: 'depende' },
    ];

    const REUNIONES = [
        { id: 'reunionSi', label: 'Sí', value: 'si' },
        { id: 'reunionNo', label: 'No', value: 'no' },
    ];

    return (
        <form className={ styles.formContainer } onSubmit={handleSubmit}>
            <h2 className={ styles.title }>Quiero ofrecer productos o servicios como aliado comercial</h2>
            <div style={{ display:"flex", flexDirection: "column", gap: "15px"}}>
                <div style={{ display: 'flex', gap: '10px'}}>
                    <div className={ styles.inputContainer }>
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            name="nombre" 
                            id="nombre" 
                            placeholder="Nombre" 
                            className={ styles.inputText }
                            onChange={handleTexts}
                            value={formData.nombre}
                            />
                        { errors && errors.map(error => (
                            error.path === 'nombre' && <ErrorText>{ error.msg }</ErrorText>
                        ))}
                    </div>
                    <div className={ styles.inputContainer }>
                        <label htmlFor="apellido">Apellido</label>
                        <input 
                            type="text" 
                            name="apellido" 
                            id="apellido" 
                            placeholder="Apellido" 
                            className={ styles.inputText }
                            onChange={handleTexts}
                            value={formData.apellido}
                            />
                        { errors && errors.map(error => (
                            error.path === 'apellido' && <ErrorText>{ error.msg }</ErrorText>
                        ))}
                    </div>
                </div>
                <div className={ styles.inputContainer }>
                    <label htmlFor="correo">Correo:</label>
                    <input 
                        type="email" 
                        name="correo" 
                        id="correo" 
                        placeholder="Correo electrónico" 
                        className={ styles.inputText }
                        onChange={handleTexts}
                        value={formData.correo}
                        />
                    { errors && errors.map(error => (
                        error.path === 'correo' && <ErrorText>{ error.msg }</ErrorText>
                    ))}
                </div>
                <div className={ styles.inputContainer }>
                    <label htmlFor="nombre_negocio">Nombre del negocio o emprendimiento:</label>
                    <input 
                        type="text" 
                        name="nombre_negocio" 
                        id="nombre_negocio" 
                        placeholder="Nombre del negocio" 
                        className={ styles.inputText }
                        onChange={handleTexts}
                        value={formData.nombre_negocio}
                    />
                    { errors && errors.map(error => (
                        error.path === 'nombre_negocio' && <ErrorText>{ error.msg }</ErrorText>
                    ))}
                </div>
                <div className={ styles.inputContainer }>
                    <h3>¿Qué tipo de productos o servicios ofreces?:</h3>
                    { errors && errors.map(error => (
                        error.nestedErrors && <ErrorText>{ error.msg }</ErrorText>
                    ))}
                    <div className={ styles.optionsContainer }>
                        { PRODUCTOS.map((producto) => (
                            <div key={producto.id} className={ styles.customCheckboxContainer }>
                                <input 
                                    type="checkbox" 
                                    name="productos" 
                                    value={producto.value} 
                                    id={producto.id} 
                                    className={ styles.hiddenCheckbox }
                                    onChange={handleCheckboxes}
                                    checked={formData.productos.includes(producto.value)}
                                />
                                <label htmlFor={producto.id} className={ styles.customCheckboxLabel }>
                                    <span className={ styles.customCheckboxBox }>
                                        <FaCircle className={styles.customCheckboxInBox}/>
                                    </span>
                                    {producto.label}
                                </label>
                            </div>
                        ))}
                        <div className={ styles.customCheckboxContainer }>
                            <input 
                                type="text" 
                                name="otro_producto"
                                className={ styles.inputText }
                                onChange={handleTexts}
                                placeholder="Otro (Indique)"
                            />
                        </div>
                    </div>
                </div>
                <div className={ styles.inputContainer }>
                    <h3>¿Dónde está ubicado el negocio?:</h3>
                    { errors && errors.map(error => (
                        error.path === 'ubicacion' && <ErrorText>{ error.msg }</ErrorText>
                    ))}
                    <div className={ styles.optionsContainer }>
                        { LUGARES.map((lugar) => (
                            <div key={lugar.id} className={ styles.customCheckboxContainer }>
                                <input 
                                    type="radio" 
                                    name="ubicacion" 
                                    value={lugar.value} 
                                    id={lugar.id} 
                                    className={ styles.hiddenCheckbox }
                                    onChange={handleTexts}
                                    checked={formData.ubicacion.includes(lugar.value)}
                                />
                                <label htmlFor={lugar.id} className={ styles.customCheckboxLabel }>
                                    <span className={ styles.customCheckboxBox }>
                                        <FaCircle className={styles.customCheckboxInBox}/>
                                    </span>
                                    {lugar.label}
                                </label>
                            </div>
                        ))}
                        <div className={ styles.customCheckboxContainer }>
                            <input 
                                type="text" 
                                name="lugar" 
                                className={ styles.inputText }
                                onChange={handleTexts}
                                placeholder="Otro (Indique)"
                            />
                        </div>
                    </div>
                </div>
                <div className={ styles.inputContainer }>
                    <h3>¿Qué te interesa lograr con Nora?:</h3>
                    { errors && errors.map(error => (
                        error.path === 'interes' && <ErrorText>{ error.msg }</ErrorText>
                    ))}
                    <div className={ styles.optionsContainer } style={{ gap: '15px' }}>
                        { INTERESES.map((interes) => (
                            <div key={interes.id} style={{ width: '100%' }}>
                                <input 
                                    type="radio" 
                                    name="interes" 
                                    value={interes.value} 
                                    id={interes.id} 
                                    className={ styles.hiddenCheckbox }
                                    onChange={handleTexts}
                                    checked={formData.interes.includes(interes.value)}
                                />
                                <label htmlFor={interes.id} className={ styles.customCheckboxLabel }>
                                    <span className={ styles.customCheckboxBox }>
                                        <FaCircle className={styles.customCheckboxInBox}/>
                                    </span>
                                    {interes.label}
                                </label>
                            </div>
                        ))}
                            <input 
                                type="text" 
                                name="interes" 
                                className={ styles.inputText }
                                onChange={handleTexts}
                                placeholder="Otro (Indique)"
                            />
                    </div>
                </div>
                <div className={ styles.inputContainer }>
                    <h3>¿Estás dispuesto a ofrecer beneficios exclusivos para clientes de 0800 Nora?</h3>
                    { errors && errors.map(error => (
                        error.path === 'beneficios' && <ErrorText>{ error.msg }</ErrorText>
                    ))}
                    <div className={ styles.optionsContainer } style={{ gap: '15px' }}>
                        { BENEFICIOS.map((beneficio) => (
                            <div key={beneficio.id} style={{ width: "100%"}}>
                                <input 
                                    type="radio" 
                                    name="beneficios" 
                                    value={beneficio.value} 
                                    id={beneficio.id} 
                                    className={ styles.hiddenCheckbox }
                                    onChange={handleTexts}
                                    checked={formData.beneficios.includes(beneficio.value)}
                                />
                                <label htmlFor={beneficio.id} className={ styles.customCheckboxLabel }>
                                    <span className={ styles.customCheckboxBox }>
                                        <FaCircle className={styles.customCheckboxInBox}/>
                                    </span>
                                    {beneficio.label}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={ styles.inputContainer }>
                    <h3>¿Quieres que te contactemos para una reunión?</h3>
                    { errors && errors.map(error => (
                        error.path === 'reunion' && <ErrorText>{ error.msg }</ErrorText>
                    ))}
                    <div className={ styles.optionsContainer } style={{ gap: '15px' }}>
                        { REUNIONES.map((reunion) => (
                            <div key={reunion.id} style={{ width: "100%"}}>
                                <input 
                                    type="radio" 
                                    name="reunion" 
                                    value={reunion.value} 
                                    id={reunion.id} 
                                    className={ styles.hiddenCheckbox }
                                    onChange={handleTexts}
                                    checked={formData.reunion.includes(reunion.value)}
                                />
                                <label htmlFor={reunion.id} className={ styles.customCheckboxLabel }>
                                    <span className={ styles.customCheckboxBox }>
                                        <FaCircle className={styles.customCheckboxInBox}/>
                                    </span>
                                    {reunion.label}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <button type="submit" className={ styles.buttonSubmit }>ENVIAR SOLICITUD</button>
            </div>
        </form>
    )
}

export default FormShop;