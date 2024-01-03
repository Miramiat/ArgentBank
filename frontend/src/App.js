// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './Pages/Home';
import SignIn from './Pages/sign-in';
import UserProfile from './Pages/user';
import UpdateProfile from './Pages/update-profile'; // Importez votre composant UpdateProfile

function App() {
  // Récupérez le token depuis le store Redux
  const { token } = store.getState().auth;

  // Fonction pour vérifier si l'utilisateur est connecté
  const isAuthenticated = () => !!token;

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          {/* Utilisez une fonction de rendu pour les routes protégées */}
          <Route
            path="/user"
            element={isAuthenticated() ? <UserProfile /> : <Navigate to="/sign-in" />}
          />
          {/* Ajoutez une route pour la mise à jour du profil */}
          <Route
            path="/update-profile"
            element={isAuthenticated() ? <UpdateProfile /> : <Navigate to="/sign-in" />}
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
