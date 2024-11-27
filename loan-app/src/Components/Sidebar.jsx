import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar bg-light p-3">
      <div className="text-center mb-3">
        <img src="./Media.png" alt="Profile" className="profile-photo" />
        <h4 className="mt-2">Vishal Gholkar</h4>
        <p>Age: 26</p>
        <p>Welcome, Vishal!</p>
        <hr />
      </div>
      <nav className="nav flex-column">
        <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
        <Link className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`} to="/dashboard">Dashboard</Link>
        <Link className={`nav-link ${location.pathname === '/view-profile' ? 'active' : ''}`} to="/view-profile">Profile</Link>
        <Link className={`nav-link ${location.pathname === '/edit-profile' ? 'active' : ''}`} to="/edit-profile">Update Profile</Link>
        <Link className={`nav-link ${location.pathname === '/apply-loan' ? 'active' : ''}`} to="/apply-loan">Apply for Loan</Link>
        <Link className={`nav-link ${location.pathname === '/view-loan-details' ? 'active' : ''}`} to="/view-loan-details">Loan Details</Link>
        <Link className={`nav-link ${location.pathname === '/kyc' ? 'active' : ''}`} to="/kyc">KYC Verification</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
