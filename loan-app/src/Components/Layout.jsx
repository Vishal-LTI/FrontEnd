import React from 'react';
import Navbar from '../atoms/Navbar';
import Footer from '../atoms/Footer';
import Sidebar from '../atoms/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <div className="content p-1">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
