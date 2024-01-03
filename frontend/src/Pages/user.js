import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logoutUser } from '../features/auth/authSlice'; // Import de l'action de déconnexion
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Account from '../Components/Account';
import '../designs/css/main.css';

function UserProfile() {
  const { user, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirigez vers la page précédente s'il n'y a pas d'utilisateur connecté
    if (!user) {
      navigate(-1, { replace: true });
    }
  }, [user, navigate]);

  const { userName } = user ?? {};

  const handleLogout = () => {
    // Dispatchez l'action de déconnexion
    dispatch(logoutUser());
    // Redirigez l'utilisateur vers la page d'accueil
    navigate('/');
  };

  if (!user) {
    return null;
  }

  return (
    <>
      <Header isUserProfile />

      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back<br />
            {userName}!
          </h1>
          <Link to="/update-profile">
            <button className="edit-button">Edit Name</button>
          </Link>
          <button className="sign-out-button" onClick={handleLogout}>
            Sign Out
          </button>
        </div>

        <h2 className="sr-only">Accounts</h2>

        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />

        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />

        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
      <Footer />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
}

export default UserProfile;






