import React from "react";
import "../styles/navbar.css";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <nav className="navbar navbar-expand-lg nav-bg">
      <div className="container-fluid">
      <Nav.Link className="navbar-brand nav-title" href="/">
          Loan Bank |<span className="nav-subtitle">Home Loan</span>{" "}
        </Nav.Link>
        <button className="nav-link nav-title justify-content-end" href="/" onClick={() => dispatch(logout())}>
          Logout
          </button>
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
