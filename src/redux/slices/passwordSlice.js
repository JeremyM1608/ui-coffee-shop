import axiosInstance from "@/utils/axiosInstance";

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    status:"idle",
    statusRequestOtp:"idle",
    statusForgotPassword:"idle",
    error:null
};


export const editPassword = createAsyncThunk(
    "password/editPassword",
    async(payload,{rejectWithValue})=>{
        try {
            const res = await axiosInstance.put("/user/edit-password", payload);
            return res.data.msg;
        } catch (error) {
             let errorMessage = "An error occurred"; 

             if (error.response) {
                 errorMessage = error.response.data.msg || errorMessage;
             } else if (error.message) {
                 errorMessage = error.message;
             }
             return rejectWithValue(errorMessage);
        }
    }
)
export const requestOtp = createAsyncThunk(
    "password/requestOtp",
    async(payload, {rejectWithValue})=>{
        try{
            const res = await axiosInstance.post("/reset-password/request-reset", payload);
            return res.data
        }catch(err){
            return rejectWithValue(err.message|| "An Error Occured");
        }
    }
)

export const forgotPassword = createAsyncThunk(
    "password/forgotPassword",
    async(payload)=>{
        try{
            const res = await axiosInstance.post("/reset-password", payload);
            return res.data
        }catch(err){
            return rejectWithValue(err?.response?.msg || "An error occured");
        }
    }
)


const passwordSlice = createSlice({
    name:"password",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(editPassword.pending, (state)=>{
            state.status = "loading";
            state.error = null;
        })
        .addCase(editPassword.fulfilled, (state)=>{
            state.status = "succeeded";
        })
        .addCase(editPassword.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.payload;
        })
        builder
        .addCase(requestOtp.pending, (state)=>{
            state.statusRequestOtp = "loading";
            state.error = null;
        })
        .addCase(requestOtp.fulfilled, (state)=>{
            state.statusRequestOtp = "succeeded";
        })
        .addCase(requestOtp.rejected, (state, action)=>{
            state.statusRequestOtp = "failed";
            state.error = action.error?.message;
        })
        builder
        .addCase(forgotPassword.pending, (state)=>{
            state.statusForgotPassword = "loading";
            state.error = null;
        })
        .addCase(forgotPassword.fulfilled, (state)=>{
            state.statusForgotPassword = "succeeded";
        })
        .addCase(forgotPassword.rejected, (state, action)=>{
            state.statusForgotPassword = "failed";
            state.error = action.payload;
        })
    }
})

export default passwordSlice.reducer;