import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:500/api",
});
api.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if(token){
        req.headders.Authorization = 'Bearer ${token}';
    }
    return req;
});
export default api;