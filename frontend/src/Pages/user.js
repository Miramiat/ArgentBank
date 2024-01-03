import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Account from '../Components/Account';
import '../designs/css/main.css';

function UserProfile() {
  const { user, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirigez vers la page précédente s'il y en a une, sinon vers /signin
    if (!user) {
      navigate(-1, { replace: true });
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const { userName } = user ?? {};

  return (
    <>
      <Header isUserProfile />

      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{userName}!</h1>
          <button className="edit-button">Edit Name</button>
        </div>

        <h2 className="sr-only">Accounts</h2>

        {/* Utilisez le composant Account pour chaque compte */}
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
