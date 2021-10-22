import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://172.31.1.84:4000'
})