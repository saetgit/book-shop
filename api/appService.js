import axios from 'axios';
import { URLs } from './appUrls';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/', 
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// یک نمونه برای درخواست GET
export const getBooks = () => {
    return apiClient.get(URLs.GET_BOOKS);
};

export const getLogos = () => {
    return apiClient.get(URLs.GET_LOGOS);
};

