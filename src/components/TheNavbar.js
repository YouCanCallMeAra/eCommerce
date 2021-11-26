import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function TheNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Container>
        {/* as={Link} means use react-router's Link component under the hood */}
        <Navbar.Brand as={Link} to="/" style={{ color: "blue" }}>
          Bit Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav.Link as={Link} to="/cart" style={{ color: "orange" }}>
          <div className="nav-bar-cart-icon">
            <a class="">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </div>
        </Nav.Link>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/categories">
              Categories
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={Link} to="/login">
              login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>{" "}
      </Container>
    </Navbar>
  );
}
