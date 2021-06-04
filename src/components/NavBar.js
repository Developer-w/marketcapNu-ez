//Importar o Modulo React
import React, { Component } from "react";
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"


//Crear componente
class NavBar extends Component {
  render() {
    return (
      <div className="App">
      
      <Navbar  bg="colorNabVAr" variant="dark" sticky="top" expand="lg" collapseOnSelect>
        
        <Container>

          <CartWidget/>
        
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

      <Container>          
        <div className=" d-flex justify-content-center flex-wrap"  >
          <ItemListContainer title="Curso de Trading Basico" phrase="Alcanza tu libertad Financiera" price="$100"/>
          <ItemListContainer title="Curso de Trading Basico" phrase="Alcanza tu libertad Financiera" price="$100"/>
          <ItemListContainer title="Curso de Trading Basico" phrase="Alcanza tu libertad Financiera" price="$100"/>
        </div>
      </Container>
      
    </div>
      
    );
  }
}

export default NavBar;