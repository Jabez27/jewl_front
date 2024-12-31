import axios from "axios";

const API = axios.create({
  baseURL: "https://jewelback-1.onrender.com", // Replace with your server URL
});

// Add an interceptor to include the token in all requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken"); // Retrieve the token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default API;
