// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import thunk, { ThunkMiddleware } from "redux-thunk";
import authSlice from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    thunk,
  ],
});

export default store;


