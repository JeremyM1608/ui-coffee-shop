import axiosInstance from "@/utils/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLogin: false,
  user: null,
  token: null,
  status: 'idle',  // Menambahkan status untuk async operation
  error: null,
  successMessage: '',
};

export const logout = createAsyncThunk(
  'login/logout',
  async(_,{ rejectWithValue })=>{
    try {
      const response = await axiosInstance.delete('/user/logout',);
      localStorage.removeItem('token');
      return response.data
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg || 'An error occurred');
    }

  }
)
export const editProfile = createAsyncThunk(
  'login/editProfile',
  async( payload ,{ rejectWithValue })=>{
    try {
      const response = await axiosInstance.put(`/user/edit-profile`, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg || 'An error occurred');
    }
  }
)

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      loginSuccess: (state, action) => {
        state.isLogin = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      },
      logoutSuccess: (state) => {
        state.isLogin = false;
        state.user = null;
        state.token = null;
      },
    },
    extraReducers: (builder) => {
      builder
        // Handle pending, fulfilled, and rejected states for logout async thunk
        .addCase(logout.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(logout.fulfilled, (state) => {
          state.status = 'succeeded';
          state.isLogin = false;
          state.user = null;
          state.token = null;
        })
        .addCase(logout.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload || 'Failed to logout';
        });
        // Edit Profile
      builder
      .addCase(editProfile.pending, (state)=>{
        state.status = "loading";
        state.error = null;
      })
      .addCase(editProfile.fulfilled, (state, action) =>{
        state.status = "succeeded";
        state.user = action.payload;
        state.successMessage = 'Profile updated successfully';
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to update profile';
      });
    },
})

export const { loginSuccess, logoutSuccess } = loginSlice.actions;

export default loginSlice.reducer;