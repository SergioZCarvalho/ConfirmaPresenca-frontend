import axios from 'axios';
import { toast } from 'react-toastify';

export const useAxios = () => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      toast('Ocorreu um erro');
      return Promise.reject(error);
    },
  );
  return { api };
};
