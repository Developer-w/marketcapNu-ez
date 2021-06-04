//Importar o Modulo React
import React, { Component } from "react";
import 'react-bootstrap'
import logo from '../logoBTC.svg';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Nav, Navbar, NavbarBrand, NavDropdown, NavLink } from 'react-bootstrap';
//import './App.css';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

//Crear componente
class NavBar extends Component {
  render() {
    return (
      <div className="App">
      
      <Navbar  bg="colorNabVAr" variant="dark" sticky="top" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home" >
            <img alt="imagenTipo" src={logo} width="40" height="40" />{' '}
            Crypto Marketcap
          </Navbar.Brand>
        
          <Navbar.Toggle />
          <NavbarCollapse className="justify-content-end">
            <Nav >
              <NavDropdown title="Donar">
                <NavDropdown.Item href="https://www.binance.com/en">Criptomoneda</NavDropdown.Item>
                <NavDropdown.Item href="https://www.paypal.com/cl/home">Paypal</NavDropdown.Item>
                <NavDropdown.Item href="https://www.patreon.com/">Patreon</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="Producto" >Calculadoras</Nav.Link>
              <Nav.Link href="Cartera" >Dashboard</Nav.Link>
              <Nav.Link href="Page" >Enlaces</Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>

      <div className="content">
        Aqui ira el contenido del Header
      </div>
      
    </div>
      
    );
  }
}

export default NavBar;