import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import AdminNavbarMenu from './AdminNavbar';

const Layout = ({ children, isUser = true}) => {
  console.log("isUser", isUser)
  return (
    <div className="d-flex flex-column min-vh-100">
      
      {
        isUser && <Navbar />
      }
      {
        !isUser && <AdminNavbarMenu />
      }
      <div className="d-flex flex-grow-1">
        <Sidebar isAdmin={!isUser}/>
        <div className="content p-1">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
