import "../estilos/style.css";  

import React, { component } from 'react'
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Card } from "react-bootstrap"; 

import { products } from "../data/products";
import { CartWidget } from "./CartWidget";
import "../estilos/style.css"
import { useProducts } from "../hooks/useProducts";

export const NavBar = () =>{

  const { productos } = useProducts();
  const categorias = [];

  if(productos != null){
    productos.forEach(element => {
      if(!(categorias.includes(element.category))){
        categorias.push(element.category);
      }
    });
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Olga 3D Impresiones</Navbar.Brand>
      <Nav className="me-auto">
        <NavLink to="/" className="navLink">Inicio</NavLink>
        {categorias.map((cat) => <NavLink to={`category/${cat}`} className="navLink">{cat}</NavLink>)}
      </Nav>
      <CartWidget/>
    </Container>
  </Navbar>
  );
} 