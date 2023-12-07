import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "../miestilo.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" data-bs-theme="dark" className="navbar-estilo">
        <Container>
          <Navbar.Brand href="#home">Yesser Sport</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item className="item-producto" href="#action/3.1">
                  Sueter
                </NavDropdown.Item>
                <NavDropdown.Item className="item-producto" href="#action/3.2">
                  Bermudas
                </NavDropdown.Item>
                <NavDropdown.Item className="item-producto" href="#action/3.3">
                  Pantalonetas
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="item-producto" href="#action/3.4">
                  Gorras
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Contactenos</Nav.Link>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
