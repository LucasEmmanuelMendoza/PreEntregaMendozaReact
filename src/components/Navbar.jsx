import "../estilos/style.css";  

import React, { component, useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Card } from "react-bootstrap"; 

import { CartWidget } from "./CartWidget";
import "../estilos/style.css"
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";

export const NavBar = () =>{
  
  let categFiltradas = [];
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const refCollection = collection(db, "items");

    getDocs(refCollection).then((snapshot) => {
      if(snapshot.size === 0) console.log("Sin datos");
      else
         setCategories( 
            snapshot.docs.map((doc) => {
              return(doc.data().category)
          })  
        );
      });
  }, [])

  for(const cat of categories){
    if(!(categFiltradas.includes(cat))){
      categFiltradas.push(cat);
    }
  }
  
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink to="/" className="navLink">Marca</NavLink>
        <Nav className="me-auto">
          <NavLink to="/" className="navLink">Inicio</NavLink>
          {categFiltradas.map((cat) => <NavLink to={`category/${cat}`} className="navLink" key={cat}>{cat}</NavLink>)} 
        </Nav>
        <CartWidget/>
      </Container>
    </Navbar> 
  );
} 