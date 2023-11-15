import "../estilos/style.css";  

import React, { component } from 'react'
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Card } from "react-bootstrap"; 

import { products } from "../data/products";
import { CartWidget } from "./CartWidget";
import "../estilos/style.css"

export const NavBar = () =>{

  //{items.map((item) => <Item item={item}/>)}
  

  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Olga 3D Impresiones</Navbar.Brand>
      <Nav className="me-auto">
        <NavLink to="/" className="navLink">Inicio</NavLink>{/* 
        <Nav.Link href="#products">Productos</Nav.Link>
        <Nav.Link href="#sobre nosotros">About</Nav.Link>
        <Nav.Link href="#cuenta">Cuenta</Nav.Link>
        <Nav.Link href="#contacto">Contacto</Nav.Link> */}{/* 
        {products.map((prod) => <NavLink to="category/${prod.category}">{prod.category}</NavLink>)} */}
        <NavLink to="category/LosSimpson" className="navLink">Los Simpson</NavLink>
        <NavLink to="category/HarryPotter" className="navLink">Harry Potter</NavLink>
        <NavLink to="category/Marvel" className="navLink">Marvel</NavLink>
        <NavLink to="category/StarWars" className="navLink">Star Wars</NavLink>
        <NavLink to="category/-" className="navLink">-</NavLink>
      </Nav>
      <CartWidget/>
    </Container>
  </Navbar>
  );
} 