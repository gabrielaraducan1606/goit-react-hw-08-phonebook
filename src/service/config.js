// src/service/config.js
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000"; // Dacă folosești un server local, altfel modifică după nevoie

const setAxiosDefault = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default setAxiosDefault;
