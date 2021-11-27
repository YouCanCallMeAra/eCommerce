import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

export default function TheNavbar() {
  const cart = useSelector((state) => state.cart.value);
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        {/* as={Link} means use react-router's Link component under the hood */}
        <Navbar.Brand as={Link} to="/" style={{ color: "orange" }}>
          Bit Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav.Link as={Link} to="/cart" style={{ color: "orange" }}>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cart.length} color="primary">
              <ShoppingCartIcon style={{ color: "white" }} />
            </StyledBadge>
          </IconButton>
        </Nav.Link>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products" style={{ color: "white" }}>
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/categories" style={{ color: "white" }}>
              Categories
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={Link} to="/login" style={{ color: "white" }}>
              login
            </Nav.Link>
            <Nav.Link as={Link} to="/register" style={{ color: "white" }}>
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>{" "}
      </Container>
    </Navbar>
  );
}
