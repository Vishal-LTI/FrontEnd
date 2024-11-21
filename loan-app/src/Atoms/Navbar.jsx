import React, { useState, useEffect } from "react";
import "../styles/navbar.css";

const Navbar = ({userLoggedIn = false}) => {
  // State to track user login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userInitials = "JD"; 

  // Simulate a login status check
  useEffect(() => {
    const loggedIn = userLoggedIn; 
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg nav-bg">
      <div className="container-fluid">
        <a className="navbar-brand nav-title" href="/">
          Loan Bank |<span className="nav-subtitle">Home Loan</span>{" "}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {isLoggedIn && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="profileDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="profile-initials">{userInitials}</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                  <li><a className="dropdown-item" href="/profile">Profile</a></li>
                  <li><a className="dropdown-item" href="/logout">Logout</a></li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
