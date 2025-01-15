import axios from 'axios';
import { keycloak } from './keycloak';

const api = axios.create({
    baseURL: 'http://localhost:8081/api'
});

api.interceptors.request.use(async (config) => {
    if (keycloak.token) {
        config.headers.Authorization = `Bearer ${keycloak.token}`;
    }
    return config;
});

export interface User {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
}

export const getUserProfile = async (): Promise<User> => {
    const response = await api.get('/user/profile');
    return response.data;
};
