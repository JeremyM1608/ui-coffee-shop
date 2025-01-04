import axiosInstance from '@/utils/axiosInstance';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; 

const PRODUCT_URL = `/product`;

const initialState = {
  product:{},
  status:'idle',
  error: null
};

export const fetchProductDetail = createAsyncThunk('product/fetchProductDetail', async(id, {rejectWithValue})=>{
  try {
    const response = await axiosInstance.get(`${PRODUCT_URL}/${id}`);
    return response.data.data;
} catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
}
})

const productDetailSlice = createSlice({
  name:"productDetail",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload; // Add fetched products to the state
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload; // Store the error message if failed
      });
  }
})

export default productDetailSlice.reducer;