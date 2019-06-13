import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.60.20.32:3333'
});

export default api;
