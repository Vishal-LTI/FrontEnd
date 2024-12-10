import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/sidebar.css';

const Sidebar = ({isAdmin = false}) => {
  const location = useLocation();
  const [ isSideBarVisible, setSidebarVisible ] = useState(false);
  const handleSidebarToggle = () =>{
    console.log(!isSideBarVisible)
    setSidebarVisible(!isSideBarVisible)
  }
  return (
    <div>
      <button 
      className='sidebar-toggler d-lg-none'
      type="button"
      onClick={handleSidebarToggle}
      aria-expanded={isSideBarVisible}
      aria-label="Toggle Sidebar for Profile">
        &#9776;
      </button>
      <div className={`sidebar-container ${isSideBarVisible?"show":"hide"}`}>
      <div className="sidebar bg-light p-3">
      <div className="text-center mb-3">
        <img src="./Media.png" alt="Profile" className="profile-photo" />
        <h4 className="mt-2">Vishal Gholkar</h4>
        <p>Age: 26</p>
        <p>Welcome, Vishal!</p>
        <hr />
      </div>
      {!isAdmin ? (
      <nav className="nav flex-column">
        <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
        <i className='bi bi-house-fill'></i> Home</Link>
        <Link className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`} to="/dashboard">
        <i className='bi bi-grid'></i> Dashboard</Link>
        <Link className={`nav-link ${location.pathname === '/view-profile' ? 'active' : ''}`} to="/view-profile">
        <i className='bi bi-person'></i> Profile</Link>
        <Link className={`nav-link ${location.pathname === '/apply-loan' ? 'active' : ''}`} to="/apply-loan">
        <i className='bi bi-pencil-square'></i> Apply for Loan</Link>
        <Link className={`nav-link ${location.pathname === '/view-loan-details' ? 'active' : ''}`} to="/view-loan-details">
        <i className='bi bi-file-richtext'></i> Loan Details</Link>
        <Link className={`nav-link ${location.pathname === '/kyc' ? 'active' : ''}`} to="/kyc">
        <i className='bi bi-check-circle'></i> KYC Verification</Link>
      </nav>
      ):
      (
        <nav className="nav flex-column">
        <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/"> 
        <i className='bi bi-house-fill'></i> Home</Link>
        <Link className={`nav-link ${location.pathname === '/admin/dashboard' ? 'active' : ''}`} to="/admin/dashboard">
        <i className='bi bi-grid'></i> Admin Dashboard</Link>
        <Link className={`nav-link ${location.pathname === '/loan-applications' ? 'active' : ''}`} to="/loan-applications">
        <i className='bi bi-pencil-square'></i>Loan Applications</Link>
        <Link className={`nav-link ${location.pathname === '/kyc-applications' ? 'active' : ''}`} to="/kyc-applications">
        <i className='bi bi-check-circle'></i> KYC Verification</Link>

      </nav>
      )}

    </div>
      </div>
      </div>
  );
}

export default Sidebar;
