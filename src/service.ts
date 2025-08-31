import axios from "axios";
import {toast} from "react-toastify";
//    baseURL: 'http://localhost:3000',
export const api = axios.create({
    baseURL: 'https://yasmin-wlader-back.onrender.com',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.Cvz2ZZxneIsvq67TRiMNt5YoTqqNEKGABC3FavNV02E'
    }
});
api.interceptors.response.use(undefined, (error) => {
   console.log({error})
    toast(
        error?.response?.data?.message || error.message,
        {
            type: "error"
        });
    return Promise.reject(error);
})
