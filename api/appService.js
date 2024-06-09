// src/api/apiService.js
import axios from 'axios';
import { URLs } from './appUrls';

// ساخت یک نمونه Axios
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

// یک نمونه برای درخواست POST
// export const createUser = (userData) => {
//     return apiClient.post(URLs.CREATE_USER, userData);
// };

// نمونه‌های دیگر برای درخواست‌های مختلف
