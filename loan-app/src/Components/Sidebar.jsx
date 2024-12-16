import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/sidebar.css';
import { useParams } from 'react-router-dom';

const Sidebar = ({isAdmin = false}) => {
  const location = useLocation();
  const [ isSideBarVisible, setSidebarVisible ] = useState(false);
  const handleSidebarToggle = () =>{
    console.log(!isSideBarVisible)
    setSidebarVisible(!isSideBarVisible)
  }
  const { id } = useParams();
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
        <h4 className="mt-2">{localStorage.getItem("name")}</h4>
        <p>{localStorage.getItem("username")}</p>
        <p>Welcome, {localStorage.getItem("name").split(' ')[0]}!</p>
        <hr />
      </div>
      {!isAdmin ? (
      <nav className="nav flex-column">
        <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
        <i className='bi bi-house-fill'></i> Home</Link>
        <Link className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`} to={`/dashboard/${id}`}>
        <i className='bi bi-grid'></i> Dashboard</Link>
        <Link className={`nav-link ${location.pathname === '/view-profile' ? 'active' : ''}`} to={`/view-profile/${id}`}>
        <i className='bi bi-person'></i> Profile</Link>
        <Link className={`nav-link ${location.pathname === '/apply-loan' ? 'active' : ''}`} to={`/apply-loan/${id}`}>
        <i className='bi bi-pencil-square'></i> Apply for Loan</Link>
        <Link className={`nav-link ${location.pathname === '/view-loan-details' ? 'active' : ''}`} to={`/view-loan-details/${id}`}>
        <i className='bi bi-file-richtext'></i> Loan Details</Link>
        <Link className={`nav-link ${location.pathname === '/kyc' ? 'active' : ''}`} to="/kyc/:id">
        <i className='bi bi-check-circle'></i> KYC Verification</Link>
      </nav>
      ):
      (
        <nav className="nav flex-column">
        <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/"> 
        <i className='bi bi-house-fill'></i> Home</Link>
        <Link className={`nav-link ${location.pathname === '/admin/dashboard' ? 'active' : ''}`} to="/admin/dashboard">
        <i className='bi bi-grid'></i> Admin Dashboard</Link>
        <Link className={`nav-link ${location.pathname === '/admin/loan-applications' ? 'active' : ''}`} to="/admin/loan-applications">
        <i className='bi bi-pencil-square'></i>Loan Applications</Link>
        <Link className={`nav-link ${location.pathname === '/admin/kyc-applications' ? 'active' : ''}`} to="/admin/kyc-applications">
        <i className='bi bi-check-circle'></i> KYC Verification</Link>

      </nav>
      )}

    </div>
      </div>
      </div>
  );
}

export default Sidebar;
