import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav, Dropdown } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { logout } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCart from "../pages/ShoppingCart";

export default function TheNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { isAuth } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        // bg="light"
        variant="light"
        sticky="top"
        style={{ backgroundColor: "#fbffff" }}
      >
        <Container>
          {/* as={Link} means use react-router's Link component under the hood */}
          <Navbar.Brand
            as={Link}
            to="/"
            style={{ color: "orange", fontWeight: "normal", fontSize: "23px" }}
          >
            Bit Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* <Nav.Link as={Link} to="/cart" style={{ color: "orange" }}> */}
          <IconButton aria-label="cart" onClick={handleShow}>
            <StyledBadge badgeContent={cart.length} color="warning">
              <ShoppingBagIcon style={{ color: "#1f1d1a" }} />
            </StyledBadge>
          </IconButton>
          {/* </Nav.Link> */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" style={{ color: "black" }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products" style={{ color: "black" }}>
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/categories" style={{ color: "black" }}>
                Categories
              </Nav.Link>
            </Nav>

            <Nav>
              {isAuth ? (
                <Dropdown>
                  <Dropdown.Toggle
                    variant="warning"
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      fontSize: "13px",
                    }}
                  >
                    USER
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Nav.Link
                        as={Link}
                        to="/profile"
                        style={{ color: "black" }}
                      >
                        profile
                      </Nav.Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Nav.Link
                        as={Link}
                        to="/"
                        onClick={() => {
                          dispatch(logout());
                        }}
                        style={{ color: "black" }}
                      >
                        logout
                      </Nav.Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Nav>
                  <Nav.Link
                    // disabled={false}
                    as={Link}
                    to="/register"
                    style={{ color: "black" }}
                  >
                    Register
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login" style={{ color: "black" }}>
                    login
                  </Nav.Link>
                </Nav>
              )}
            </Nav>
          </Navbar.Collapse>{" "}
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} style={{ width: "500px" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {" "}
          <ShoppingCart />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
