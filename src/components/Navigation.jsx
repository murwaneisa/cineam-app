import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, Dropdown } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="px-4">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-between"
      >
        <Nav className="mr-auto">
          <NavItem>
            <Nav.Link href="#link">Home</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="#link">Contact</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="#link">About</Nav.Link>
          </NavItem>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <Dropdown.Item href="#action/3.1">Action</Dropdown.Item>
            <Dropdown.Item href="#action/3.2">Another action</Dropdown.Item>
            <Dropdown.Item href="#action/3.3">Something</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#action/3.4">Separated link</Dropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <NavItem>
            <Nav.Link href="#login">checkout</Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
