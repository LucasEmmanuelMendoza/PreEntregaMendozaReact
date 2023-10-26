import "../estilos/style.css";  
import React, { component } from 'react'
import { Navbar, Nav, NavDropdown, Container, Card } from "react-bootstrap"; 

import { CartWidget } from "./CartWidget";

export const NavBar = () =>{
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Olga 3D Impresiones</Navbar.Brand>

      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#features">Productos</Nav.Link>
        <Nav.Link href="#pricing">About</Nav.Link>
        <Nav.Link href="#pricing">Cuenta</Nav.Link>
        <Nav.Link href="#pricing">Contacto</Nav.Link>
      </Nav>
      
      <CartWidget/>
    </Container>
  </Navbar>
    

  );
} 