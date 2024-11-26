import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar bg-light">
      <nav className="nav flex-column">
        <Link className="nav-link" to="/dashboard">Dashboard</Link>
        <Link className="nav-link" to="/profile">Profile</Link>
        <Link className="nav-link" to="/settings">Settings</Link>
        <Link className="nav-link" to="/logout">Logout</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
