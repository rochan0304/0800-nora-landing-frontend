import axios from "axios";

const tiendaApi = axios.create({
    baseURL: import.meta.env.VITE_URL_API,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const postTienda = (formData) => {
    return tiendaApi.post('/tienda', formData);
};