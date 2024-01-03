// SignIn.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFormData, loginUser, loginUserSuccess, loginUserFailure, fetchUserProfile } from '../features/auth/authSlice';
// Autres imports...

import Button from '../Components/Button';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import '../designs/css/main.css';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, formData } = useSelector((state) => state.auth);

  const handleSignIn = async () => {
    try {
      const loginData = {
        email: formData.email,
        password: formData.password,
      };

      // Appel de l'action asynchrone loginUser
      const resultAction = await dispatch(loginUser(loginData));

      // Vérifiez si l'action a été résolue avec succès
      if (loginUserSuccess.match(resultAction)) {
        const { user, token } = resultAction.payload.body;

        // Stockage du token en fonction du choix de "Remember me"
        if (formData.rememberMe) {
          localStorage.setItem('token', token);
        } else {
          sessionStorage.setItem('token', token);
        }

        // Appel de l'action asynchrone fetchUserProfile avec le token
        await dispatch(fetchUserProfile(token));

        // Redirigez vers le profil utilisateur après la connexion réussie
        navigate('/user-profile');
      }
    } catch (error) {
      // Gérez les erreurs ici
      console.error('Erreur lors de la connexion :', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const payloadValue = type === 'checkbox' ? checked : value;

    // Envoyer l'action pour mettre à jour le formData
    dispatch(setFormData({ [name]: payloadValue }));
  };

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="email"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Button text={loading ? 'Signing In...' : 'Sign In'} onClick={handleSignIn} disabled={loading} />
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SignIn;





