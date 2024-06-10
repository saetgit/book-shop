// src/api/apiUrls.js
const API_BASE_URL = 'http://localhost:8000';

export const URLs = {
    GET_BOOKS: `${API_BASE_URL}/books`,
    GET_BOOKSID: (itemId) => `${API_BASE_URL}/books/${itemId}`,
    GET_LOGOS: `${API_BASE_URL}/logo`,
    GET_USERS: `${API_BASE_URL}/users`,

};
