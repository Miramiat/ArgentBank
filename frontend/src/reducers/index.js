// src/reducers/index.js
import { combineReducers } from 'redux';
import authReducer from '../features/auth/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  // Ajoutez d'autres réducteurs au besoin
});

export default rootReducer;
