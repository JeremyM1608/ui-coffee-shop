import axiosInstance from '@/utils/axiosInstance';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const PRODUCT_URL = `/product`;

const initialState = {
  products: [],  // Memperbaiki penamaan state untuk konsistensi
  status: 'idle',
  error: null,
  successMessage: '',
};

//Get All Product
export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async ({ page, category }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${PRODUCT_URL}/`, {
        params: { page, category }
      });
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg || err.message);
    }
  }
);

//Add Product
export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`${PRODUCT_URL}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg || 'An error occurred');
    }
  }
);

//Delete Product
export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async(id, {rejectWithValue}) => {
    try {
      const response = await axiosInstance.delete(`${PRODUCT_URL}/${id}`)
      return {id};
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg || 'An error occurred');
    }
  } 
)

//Edit Product
export const editProduct = createAsyncThunk(
  'product/editProduct',
  async ({id, payload}, {rejectWithValue}) =>{
    try {
      const response = await axiosInstance.put(`${PRODUCT_URL}/${id}`, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg || 'An error occurred');
    }
  }
)

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;  // Pastikan data produk disimpan di state.product
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });

    // handle addProduct if necessary
    builder
      .addCase(addProduct.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.successMessage = 'Product added successfully';
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || 'Failed to add product';
      });

      // Edit Product
    builder
    .addCase(editProduct.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(editProduct.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.successMessage = 'Product updated successfully';
      // Mengupdate produk yang sudah ada di state.products
      state.products = state.products.map((product) =>
        product.product_id === action.payload.id ? action.payload : product
      );
    })
    .addCase(editProduct.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload || 'Failed to update product';
    });

    //Delete Product
    builder
    .addCase(deleteProduct.pending, (state)=>{
      state.status = 'loading';
      state.error = null;
    })
    .addCase(deleteProduct.fulfilled, (state, action) => {
      state.status = 'succeeded';
      // Remove the deleted product from the list
      state.products = state.products.filter(product => product.product_id !== action.payload.id);
      state.successMessage = 'Product deleted successfully';
    })
    .addCase(deleteProduct.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload || 'Failed to delete product';
    });
  }
});

export default productSlice.reducer;
