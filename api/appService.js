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

export const getBooksId = (itemId) => {
    return apiClient.get(URLs.GET_BOOKSID(itemId));
};

export const postCart = (cartItems) => {
    return apiClient.post(URLs.POST_CART,cartItems);
};

export const postUser = (userInfo) => {
    return apiClient.post(URLs.POST_USER,userInfo);

};

export const getCart = () => {
    return apiClient.get(URLs.GET_CART);
};

export const deleteCart = (itemId) => {
    return apiClient.delete(`${URLs.DELETE_CART}/${itemId}`);
};