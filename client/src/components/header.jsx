import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../static/image/brandlogo.png";

export default function Header() {
  return (
    <Navbar variant="dark" className="navbar">
      <Navbar.Brand class="navbar-brand" href="/">
        <img className="brand-logo" src={Logo} width="35" height="35" /> EDUBD
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
