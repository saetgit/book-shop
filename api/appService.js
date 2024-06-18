// src/api/apiClient.js
import axios from 'axios';
import { URLs } from './appUrls';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getBooks = () => {
    return apiClient.get(URLs.GET_BOOKS);
};

export const getLogos = () => {
    return apiClient.get(URLs.GET_LOGOS);
};

export const getBooksId = (itemId) => {
    return apiClient.get(URLs.GET_BOOKSID(itemId));
};

export const postCart = (cartItem) => {
    return apiClient.post(URLs.POST_CART, cartItem);
};

export const postUser = (userInfo) => {
    return apiClient.post(URLs.POST_USER, userInfo);
};

export const getUser = (email, password) => {
    return apiClient.get(URLs.GET_USER, {
        params: {
            email,
            password
        }
    });
};

export const getCart = () => {
    return apiClient.get(URLs.GET_CART);
};

export const deleteCart = (itemId) => {
    return apiClient.delete(URLs.DELETE_CART(itemId));
};

export const updateCartItemQuantity = (itemId, quantity) => {
    return apiClient.patch(URLs.UPDATE_CART_ITEM_QUANTITY(itemId), { quantity });
};
