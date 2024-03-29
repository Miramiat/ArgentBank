// src/Components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import argentBankLogo from '../designs/img/argentBankLogo.webp'

function Header({ isUserProfile }) {
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div>
        {isUserProfile ? (
          <>
            <Link to="/user-profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Tony
            </Link>
            <Link to="/" className="main-nav-item">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link to="/sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;

