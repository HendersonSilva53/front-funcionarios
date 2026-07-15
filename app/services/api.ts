import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3606"
});

export default api;