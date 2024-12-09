import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import AdminNavbarMenu from './AdminNavbar';
import "../Styles/layout.css";

const Layout = ({ children, isUser = true}) => {
  console.log("isUser", isUser)
  return (
    <div className="min-vh-100">  
    {
      isUser && <Navbar />
    }
    {
      !isUser && <AdminNavbarMenu />
    }
    <div className="display_container">
      <div className="col-sm-12 col-lg-3">
      <Sidebar isAdmin={!isUser}/>
      </div> 
      <div className="col-sm-12 col-lg-9">
        {children}
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default Layout;
