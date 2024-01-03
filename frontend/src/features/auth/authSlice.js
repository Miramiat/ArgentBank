// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    error: null,
    formData: {
      email: '',
      password: '',
      rememberMe: false,
    },
  },
  reducers: {
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    // Autres réducteurs ici
  },
});


// Exportez les actions
export const { setFormData, loginUser, loginUserSuccess, loginUserFailure, fetchUserProfile } = authSlice.actions;

// Exportez le reducer
export default authSlice.reducer;



