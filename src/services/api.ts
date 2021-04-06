import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apiens.servile.com.br',
});

export default api;
