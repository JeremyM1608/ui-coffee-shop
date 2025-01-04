import axios from "axios";
import conf from "./conf";
import axiosInstance from "@/utils/axiosInstance";
const PRODUCT_URL = `/product`;


export async function getProduct (page, category){
    try {
        const response = await axios.get(`${conf.api_product}/`,{
            params:{
                page: page,
                category: category
            }
        });
        return response;
    } catch (err) {
        throw err;
    }
};
export async function addProduct(payload) {
    try {
        const response = await axiosInstance.post(`${PRODUCT_URL}`, payload, {
            headers:{
                'Content-Type':'multipart/form-data',
            }
        });
        return response;
    } catch (err) {
        throw err;
    }
}