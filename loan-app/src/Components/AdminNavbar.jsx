import React, { useState, useEffect } from "react";
import "../styles/navbar.css";

import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
const AdminNavbarMenu = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { userInfo, userToken, isLoggedIn } = useSelector((state) => state.auth);
  const role= userInfo?.role;
//const isLoggedIn = true//;userToken !== null && userToken !== "" && role=='user';
//console.log('login', isLoggedIn)
const userInitials = "U";
const handleLogout = () => {
  dispatch(logout());
  navigate("/home");
}
  return (
    <Navbar className="navbar navbar-expand nav-bg" style={{height:'50px'}}>
      <Container fluid>
        <Navbar.Brand className="nav-title" href="/">
            <img src="/logo.svg"/>
            <span className="ms-2">|</span>
            <b className="ms-2">Admin</b>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
          <Nav className="align-items-center">
            <NavDropdown title={<span className="profile-initials">{userInitials}</span>} id="basic-nav-dropdown" className="nav-link nav-title justify-content-end">
              <NavDropdown.Item href="view-profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Edit Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as="button" onClick={handleLogout}>
                Logout              
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminNavbarMenu;
