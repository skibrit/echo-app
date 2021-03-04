import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import CartView from "../CartView/CartView";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/">Echo Commerce</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="/category/electronics">
              Electronics
            </NavDropdown.Item>
            <NavDropdown.Item href="/category/cloths">Cloths</NavDropdown.Item>
            <NavDropdown.Item href="/category/foods">Food</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <CartView />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
