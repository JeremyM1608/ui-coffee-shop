const { default: axiosInstance } = require("@/utils/axiosInstance");
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


const TRANSACTION_URL = "/transaction";

const initialState = {
    transaction: [],
    userTransaction:[],
    status: "idle",
    error: null,
    successMessage: "",
};

export const getTransaction = createAsyncThunk(
    'transaction/getTransaction',
    async({transactionId, status}, {rejectWithValue})=>{
        try {
            const response = await axiosInstance(transactionId ? `${TRANSACTION_URL}/${transactionId}`: TRANSACTION_URL,{
                params: {status}
            });
            return response.data.data;
        } catch (err) {
            return rejectWithValue(err.response?.data?.msg || 'An error occurred');
        }
    }
)
export const getUserTransaction = createAsyncThunk(
    'transaction/getUserTransaction',
    async(token,{rejectWithValue})=>{
        try {
            const response = await axiosInstance(`${TRANSACTION_URL}/detail`);

            return response.data.data;
        } catch (err) {
            return rejectWithValue(err.response?.msg || 'An error occurred');
        }
    }
)

export const addTransaction = createAsyncThunk(
    'transaction/addTransaction',
    async(payload, { rejectWithValue })=>{
        try {
            const response = await axiosInstance.post(TRANSACTION_URL, payload);
            return response.data.data;
        } catch (err) {
            return rejectWithValue(err.response?.msg || 'An error occurred');
        }
    }
)
export const paymentUpdate = createAsyncThunk(
    'transaction/paymentUpdate',
    async({id, status}, {rejectWithValue})=>{
        try {
            await axiosInstance.put(`${TRANSACTION_URL}/${id}`, {
                status:status
            });
            return {id, status};
        } catch (err) {
            return rejectWithValue(err.response?.msg || 'An error occurred');
        }
    }
)

const transactionSlice = createSlice({
    name:"transaction",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        //Add transaction
        builder
        .addCase(addTransaction.pending, (state)=>{
            state.status = "loading";
            state.error = null;
        })
        .addCase(addTransaction.fulfilled, (state, action)=>{
            state.status = "succeeded";
            state.successMessage = "transaction added";
            state.transaction.push(action.payload);
        })
        .addCase(addTransaction.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload || 'Failed to add transaction';
        });
        //Get transaction
        builder
        .addCase(getTransaction.pending, (state) =>{
            state.status = "loading";
            state.error = null;
        })
        .addCase(getTransaction.fulfilled, (state, action)=>{
            state.status = "succeeded";
            state.transaction = action.payload;
        })
        .addCase(getTransaction.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.payload ||'Failed to get transactions';
        })
        // Get User Transaction
        builder
        .addCase(getUserTransaction.pending, (state) =>{
            state.status = "loading";
            state.error = null;
        })
        .addCase(getUserTransaction.fulfilled, (state, action)=>{
            state.status = "succeeded";
            state.userTransaction = action.payload;
        })
        .addCase(getUserTransaction.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.payload ||'Failed to get transactions';
        })
        // Payment update
        builder
        .addCase(paymentUpdate.pending, (state) =>{
            state.status = "loading";
            state.error = null;
        })
        .addCase(paymentUpdate.fulfilled, (state, action)=>{
            state.status = "succeeded";
            state.successMessage = "Payment status updated successfully";
            const {id, status} = action.payload;
            const updateTransaction = state.transaction.map((transaction)=>{
                if(transaction.id_transaction === id){
                    return {...transaction, status};
                }
                return transaction;
            })
            state.transaction = updateTransaction;
        })
        .addCase(paymentUpdate.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.payload ||'Failed to update payment status';
        })
    }
})

export default transactionSlice.reducer;