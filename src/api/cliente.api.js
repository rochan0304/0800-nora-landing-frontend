import axios from "axios";

const clienteApi = axios.create({
    baseURL: import.meta.env.VITE_URL_API,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const postCliente = ( formData ) => {
    return clienteApi.post('/cliente', formData)
};