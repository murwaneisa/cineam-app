import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  Dropdown,
  Image,
  Button,
} from "react-bootstrap";
import "../style/nav.css";

function Navigation() {
  return (
    <Navbar variant="dark" expand="md" className="px-4 transparent-navbar">
      <Navbar.Brand href="/home">
        <Image src="/images/logo2.png" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-between"
      >
        <Nav className="mr-auto nav-text">
          <NavItem className=" nav-text">
            <Nav.Link href="/home">Home</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="#link">Show times</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="#link">About us</Nav.Link>
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
            <Button className="btn btn-outline-light px-4 btn-desc bg-dark">
              Join
            </Button>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
