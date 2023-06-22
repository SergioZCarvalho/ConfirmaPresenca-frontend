import { useAuthStore } from '@/store';
import axios from 'axios';
import { toast } from 'react-toastify';

export const useAxios = () => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });
  const { access_token } = useAuthStore();
  api.interceptors.request.use((config) => {
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
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
