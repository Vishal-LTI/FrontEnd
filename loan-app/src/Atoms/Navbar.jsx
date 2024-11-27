import React, { useState, useEffect } from "react";
import "../styles/navbar.css";

import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
const NavbarMenu = () => {
  const dispatch = useDispatch()
const isLoggedIn = true
const userInitials = "U";
  return (
    <Navbar className="navbar navbar-expand nav-bg" style={{height:'50px'}}>
      <Container>
        <Navbar.Brand className="nav-title" href="/">
            <img src="./logo.svg"/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
          <Nav className="align-items-center">
            <NavDropdown title={<span className="profile-initials">{userInitials}</span>} id="basic-nav-dropdown" className="nav-link nav-title justify-content-end">
              <NavDropdown.Item href="view-profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as="button" onClick={() => dispatch(logout())}>
                Logout              
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
