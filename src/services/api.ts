import axios from 'axios';

const api = axios.create({
    baseURL: 'httpl://localhost:3334',
});

export default api;