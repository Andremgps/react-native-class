import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.globalgiving.org/api/public',
  headers: {
    Accept: 'application/json',
  },
});

export default api;
