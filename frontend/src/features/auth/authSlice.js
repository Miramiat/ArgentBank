import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action asynchrone pour la connexion de l'utilisateur
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Action asynchrone pour mettre à jour le profil de l'utilisateur
export const updateUserProfile = createAsyncThunk(
  'auth/updateUserProfile',
  async ({ token, updatedProfileData }, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedProfileData),
      });

      if (!response.ok) {
        throw new Error('Failed to update user profile');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
    user: null,
    token: null,
  },
  reducers: {
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    loginUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.body.user;
      state.token = action.payload.body.token;
    },
    logoutUser: (state) => {
      // Réinitialiser l'état lors de la déconnexion
      state.loading = false;
      state.error = null;
      state.formData = {
        email: '',
        password: '',
        rememberMe: false,
      };
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.body.user;
        state.token = action.payload.body.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.body;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Exportez les actions
export const { setFormData, loginUserSuccess, logoutUser } = authSlice.actions;

// Exportez le reducer
export default authSlice.reducer;
