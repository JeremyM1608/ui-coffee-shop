import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    timeout: 10000,
});


axiosInstance.interceptors.request.use(
    (config) =>{
        const token = localStorage.getItem('token');
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }   
);

axiosInstance.interceptors.response.use(
    (response)=>{
        return response;
    },
    async(error)=>{
        const originalRequest = error.config;
        const router = useRouter();
        if(error.response && error.response.status === 401 && !originalRequest._retry){
            originalRequest._retry = true;
            try {
                const refreshToken = Cookies.get('refreshToken');
                if(!refreshToken){
                    router.replace('/login');
                    return Promise.reject(error);
                }
                const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/token`, {refreshToken});

                const newAccessToken = res.data.accessToken || res.accessToken;
                localStorage.setItem('token', newAccessToken);
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

                return axiosInstance(originalRequest); 
            } catch (refreshError) {
                router.replace('/login');
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;