import axios from 'axios';

// Backend'in canlı ana adresi
// Sonuna '/api' veya '/login' EKLEME. Sadece ana domain kalsın.
export const API_BASE_URL = "https://eu-portal-backend.onrender.com";

const api = axios.create({
    // Tüm istekler bu adrese gidecek
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;