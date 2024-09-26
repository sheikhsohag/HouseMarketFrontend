// src/axiosSetup.js
import axios from 'axios';
import { getAccessToken } from '../constants/Token';


const fetchAccessToken = async () => {
  const tokenData = await getAccessToken();
  return tokenData ? tokenData.access : null;
};


const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Update this URL to your backend's URL
});

// Adding an interceptor to include the Authorization header in all requests
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await fetchAccessToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
