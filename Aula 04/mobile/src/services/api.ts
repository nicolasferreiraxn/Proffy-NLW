import axios from 'axios';
const api = axios.create({
  baseURL: 'http://192.168.100.15:3333'
})

export default api;