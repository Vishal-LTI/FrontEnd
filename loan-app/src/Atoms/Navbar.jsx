import React from "react";
import "../styles/navbar.css";
const Navbar = () => {
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
      </div>
    </nav>
  );
};

export default Navbar;
