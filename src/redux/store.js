import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import loginReducer from './slices/slice';
import storage from'redux-persist/lib/storage'
import productReducer from './slices/productSlice';
import productDetail from './slices/productDetailSlice';
import yourCart from "./slices/yourCartSlice";
import transaction from "./slices/transactionSlice";
import passwordSlice from "./slices/passwordSlice";

const persistConfig = {
  key: 'root',
  storage,
}

const persistLogin = persistReducer(persistConfig, loginReducer);

const store = configureStore({
  reducer: {
    login: persistLogin, // Menambahkan login reducer
    product: productReducer,
    productDetail,
    yourCart,
    transaction,
    password: passwordSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/FLUSH', 'persist/PURGE'], // Abaikan peringatan terkait persist
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };