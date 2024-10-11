import React from 'react';
import Footer from './footer';
import Navbar from './navbar';

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
