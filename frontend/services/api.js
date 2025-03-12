import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL
});

export const registerUser = async (userData) => {
    return await api.post('/users/register', userData);
};

export const loginUser = async (userData) => {
    return await api.post('/users/login', userData);
};

export const createTask = async (taskData) => {
    return await api.post('/tasks', taskData);
};

export const getTasks = async (userId) => {
    return await api.get(`/tasks/${userId}`);
};

export default api;
