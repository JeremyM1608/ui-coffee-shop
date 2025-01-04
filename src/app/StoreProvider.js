'use client'
import { persistor, store } from '@/redux/store';
// import { useRef } from 'react'
import { Provider } from 'react-redux'
// import { makeStore } from '../store/store'
import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";

export default function StoreProvider({ children }) {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}