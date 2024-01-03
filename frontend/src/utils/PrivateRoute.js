// src/utils/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../features/auth/authSlice';

const PrivateRoute = ({ element, ...rest }) => {
  const auth = useSelector(selectAuth);

  // Si l'utilisateur est authentifié, renvoie l'élément de la route, sinon redirige vers la page de connexion
  return <Route {...rest} element={auth.isAuthenticated ? element : <Navigate to="/sign-in" />} />;
};

export default PrivateRoute;

