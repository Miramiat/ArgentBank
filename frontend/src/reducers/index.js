import { combineReducers } from 'redux';
import authReducer from '../features/auth/authSlice';
import profileReducer from '../features/auth/profilSlice'; // Remplacez avec le chemin correct

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer, // Ajoutez votre nouveau slice ici
  // Ajoutez d'autres réducteurs au besoin
});

export default rootReducer;
