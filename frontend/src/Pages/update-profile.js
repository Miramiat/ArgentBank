import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function UpdateProfile() {
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // Utilisez le state local pour les champs de formulaire
  const [userName, setUserName] = useState(user?.userName || '');
  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [lastName, setLastName] = useState(user?.lastName || '');

  const handleSave = () => {
    // Dispatchez l'action pour mettre à jour le profil de l'utilisateur
    dispatch(updateUserProfile({ userName, firstName, lastName }));
    // Vous pouvez également rediriger l'utilisateur vers la page de profil après la sauvegarde
    navigate('/user');
  };

  const handleCancel = () => {
    // Vous pouvez ajouter une logique pour annuler les modifications si nécessaire
    // Rediriger l'utilisateur vers la page de profil
    navigate('/user');
  };

  return (
    <>
      <Header isUserProfile />

      <main className="main bg-dark">
        <div className="header">
          <h1>Edit User Info</h1>
        </div>

        <form>
          <div className="input-wrapper">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="button-group">
            <button type="button" onClick={handleSave}>
              Save
            </button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </main>
      <Footer />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
}

export default UpdateProfile;

