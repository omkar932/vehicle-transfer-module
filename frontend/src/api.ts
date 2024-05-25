import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // Base URL for the backend API
});

export default api;
