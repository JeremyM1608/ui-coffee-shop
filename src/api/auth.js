import axiosInstance from "@/utils/axiosInstance.js";
import conf from "./conf.js";
import axios from "axios";

export async function register(payload) {
    try{
        const response = await axios.post(`${conf.api_auth}/register`, payload);
        return response.data;
    }catch(err){
        throw err;
    }
}
export async function login(payload) {
    try{
        const response = await axios.post(`${conf.api_auth}/login`, payload);
        return response.data;
    }catch(err){
        throw err;
    }
}
export async function getDetailUser(token) {
    try{
        const response = await axios.get(`${conf.api_auth}/get-user-detail`, {
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return response.data;
    }catch(err){
        throw err;
    }
}
export async function logout() {
    try{
        const response = await axiosInstance.delete(`${conf.api_auth}/logout`);
        return response.data;
    }catch(err){
        throw err;
    }
}
export async function requestForOtp(payload) {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/reset-password/request-reset`, payload)
        return response.data;
    } catch (error) {
        throw error;
    }
}
export async function resetNewPassword(payload) {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/reset-password`, payload)
        return response.data;
    } catch (error) {
        throw error;
    }
}