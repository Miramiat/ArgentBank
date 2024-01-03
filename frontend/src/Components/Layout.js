// src/Components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

import '../designs/css/main.css';

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
