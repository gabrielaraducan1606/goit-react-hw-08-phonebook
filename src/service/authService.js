// src/service/authService.js
import axios from 'axios';

const BASE_URL = 'https://connections-api.goit.global';

const login = async (payload) => {
  const response = await axios.post(`${BASE_URL}/users/login`, payload, {
    headers: { "Content-Type": "application/json" },
  });
  return response;
};

const register = async (payload) => {
  const response = await axios.post(`${BASE_URL}/users/signup`, payload, {
    headers: { "Content-Type": "application/json" },
  });
  return response;
};

const logout = async () => {
  const response = await axios.post(`${BASE_URL}/users/logout`);
  return response;
};

const getCurrentUser = async (token) => {
  const response = await axios.get(`${BASE_URL}/users/current`, {
    headers: { "Authorization": `Bearer ${token}` }
  });
  return response;
};

const authService = {
  login,
  register,
  logout,
  getCurrentUser,
};

export default authService;
