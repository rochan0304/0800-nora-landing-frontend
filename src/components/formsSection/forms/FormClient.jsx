import React, { useState } from "react";
import styles from "./Form.module.css";
import { FaCircle } from "react-icons/fa";
import { postCliente } from "../../../api/cliente.api";
import ErrorText from "../../ErrorText";
import { useNavigate } from "react-router-dom";
function FormClient() {
    const [ formData, setFormData ] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        fecha_nacimiento: '',
        productos: [],
        otro_producto: '',
        frecuencia: '',
        canal_servicio: '',
        ubicacion: '',
        otro_ubicacion: '',
        mejorar_experiencia: '',
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
            const response = await postCliente(formData);
            navigate('/verify');
        } catch (err) {
            if (err.response && err.response.data && err.response.data.errors) {
                setErrors(err.response.data.errors);
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

    const CANALES_DE_SERVICIO = [
        { id: 'whatsapp', label: 'WhatsApp', value: 'whatsapp' },
        { id: 'instagram', label: 'Instagram', value: 'instagram' },
        { id: 'telefono', label: 'Teléfono', value: 'telefono' },
        { id: 'app_movil', label: 'App movil', value: 'app movil' },
        { id: 'pagina_web', label: 'Página web', value: 'pagina web' },
    ];

    const FECHAS_NACIMIENTO = [
        { id: '1965-1980', label: '1965 - 1980', value: '1965-1980' },
        { id: '1981-1996', label: '1981 - 1996', value: '1981-1996' },
        { id: '1997-2012', label: '1997 - 2012', value: '1997-2012' },
    ];

    const FRECUENCIAS = [
        { id: 'urgente', label: 'Urgente', value: 'urgente' },
        { id: 'ocasionalmente', label: 'Ocasionalmente', value: 'ocasionalmente' },
        { id: 'Una_vez_puntual', label: 'Una vez puntual', value: 'Una_vez_puntual' },
    ];

    return (
        <form className={ styles.formContainer } onSubmit={handleSubmit}>
            <h2 className={ styles.title }>Quiero comprar con ayuda de Nora</h2>
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
                            error.path === 'nombre' && <ErrorText>{error.msg}</ErrorText>
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
                            error.path === 'apellido' && <ErrorText>{error.msg}</ErrorText>
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
                        error.path === 'correo' && <ErrorText>{error.msg}</ErrorText>
                    ))}
                </div>
                <div className={ styles.inputContainer }>
                    <h3>Indique su fecha de nacimiento:</h3>
                    { errors && errors.map(error => (
                        error.path === 'fecha_nacimiento' && <ErrorText>{error.msg}</ErrorText>
                    ))}
                    <div className={ styles.optionsContainer } style={{ display: 'flex', flexDirection: 'column', gap: '15px'}}>
                        { FECHAS_NACIMIENTO.map((fecha_nacimiento) => (
                            <div key={fecha_nacimiento.id} className={ styles.customCheckboxContainer }>
                                <input 
                                    type="radio" 
                                    name="fecha_nacimiento" 
                                    value={fecha_nacimiento.value} 
                                    id={fecha_nacimiento.id} 
                                    className={ styles.hiddenCheckbox }
                                    onChange={handleTexts}
                                    checked={formData.fecha_nacimiento.includes(fecha_nacimiento.value)}
                                />
                                <label htmlFor={fecha_nacimiento.id} className={ styles.customCheckboxLabel }>
                                    <span className={ styles.customCheckboxBox }>
                                        <FaCircle className={styles.customCheckboxInBox}/>
                                    </span>
                                    {fecha_nacimiento.label}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={ styles.inputContainer }>
                    <h3>¿Qué tipo de productos te gustaría encontrar con Nora?:</h3>
                    { errors && errors.map(error => (
                        error.nestedErrors && <ErrorText>{error.msg}</ErrorText>
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
                    <h3>¿Con qué frecuencia necesitas este tipo de ayuda?:</h3>
                    { errors && errors.map(error => (
                        error.path === 'frecuencia' && <ErrorText>{error.msg}</ErrorText>
                    ))}
                    <div className={ styles.optionsContainer } style={{ display: 'flex', flexDirection: 'column', gap: '15px'}}>
                        { FRECUENCIAS.map((frecuencia) => (
                            <div key={frecuencia.id} className={ styles.customCheckboxContainer }>
                                <input 
                                    type="radio" 
                                    name="frecuencia" 
                                    value={frecuencia.value} 
                                    id={frecuencia.id} 
                                    className={ styles.hiddenCheckbox }
                                    onChange={handleTexts}
                                    checked={formData.frecuencia.includes(frecuencia.value)}
                                />
                                <label htmlFor={frecuencia.id} className={ styles.customCheckboxLabel }>
                                    <span className={ styles.customCheckboxBox }>
                                        <FaCircle className={styles.customCheckboxInBox}/>
                                    </span>
                                    {frecuencia.label}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={ styles.inputContainer }>
                    <h3>¿Prefieres obtener este servicio por…?:</h3>
                    { errors && errors.map(error => (
                        error.path === 'canal_servicio' && <ErrorText>{error.msg}</ErrorText>
                    ))}
                    <div className={ styles.optionsContainer } >
                        { CANALES_DE_SERVICIO.map((canal_servicio) => (
                            <div key={canal_servicio.id} className={ styles.customCheckboxContainer }>
                                <input 
                                    type="radio" 
                                    name="canal_servicio" 
                                    value={canal_servicio.value} 
                                    id={canal_servicio.id} 
                                    className={ styles.hiddenCheckbox }
                                    onChange={handleTexts}
                                    checked={formData.canal_servicio.includes(canal_servicio.value)}
                                />
                                <label htmlFor={canal_servicio.id} className={ styles.customCheckboxLabel }>
                                    <span className={ styles.customCheckboxBox }>
                                        <FaCircle className={styles.customCheckboxInBox}/>
                                    </span>
                                    {canal_servicio.label}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={ styles.inputContainer }>
                    <h3>¿En qué zona estás ubicado?:</h3>
                    { errors && errors.map(error => (
                        error.path === 'ubicacion' && <ErrorText>{error.msg}</ErrorText>
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
                    <label htmlFor="mejorar_experiencia">¿Hay algo que debamos saber para mejorar la experiencia en tu proceso de compra? <br />(opcional):</label>
                    <input 
                        type="text" 
                        name="mejorar_experiencia" 
                        id="mejorar_experiencia" 
                        placeholder="Respuesta..." 
                        className={ styles.inputText }
                        onChange={handleTexts}
                        value={formData.mejorar_experiencia}
                    />
                </div>
                <button type="submit" className={ styles.buttonSubmit }>ENVIAR</button>
            </div>
        </form>
    )
}

export default FormClient;