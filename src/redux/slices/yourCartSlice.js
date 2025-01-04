import { createSlice } from "@reduxjs/toolkit";

const yourCart = createSlice({
    name: "yourCart",
    initialState: {
        cart: [],
    },
    reducers: {
        // Add a new item to the cart
        addCart: (state, action) => {
            const existingProductIndex = state.cart.findIndex(
                (item) => item.id_product === action.payload.id_product && item.id_size === action.payload.id_size
              ); if (existingProductIndex >= 0) {
                // If product already exists, update the qty
                state.cart[existingProductIndex].qty += action.payload.qty;
              } else {
                // If product does not exist, add it to the cart
                state.cart.push(action.payload);
              }
        },

        // Edit an existing item in the cart
        editCart: (state, action) => {
            state.cart = state.cart.map(v =>
                v.id_product === action.payload.id ? { ...v, ...action.payload } : v
            );
        },

        // Remove an item from the cart
        deleteCart: (state, action) => {
            state.cart = state.cart.filter(cart => cart.id_product !== action.payload.id);
        },
        // Clear cart
        clearCart: (state)=>{
            state.cart = []
        }
    }
});

export const { addCart, editCart, deleteCart, clearCart } = yourCart.actions;

export default yourCart.reducer;
