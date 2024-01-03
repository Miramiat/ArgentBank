// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import profileSlice from '../features/auth/profilSlice'; 

const store = configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice,
    // Ajoutez d'autres slices au besoin
  },
});

export default store;
