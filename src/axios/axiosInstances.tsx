import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.0.104:3000',
});

export default axiosInstance;
