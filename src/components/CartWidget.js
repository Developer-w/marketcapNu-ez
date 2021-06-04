//Importar o Modulo React
import React, { Component } from "react";
import 'react-bootstrap'
import logo from '../logoBTC.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

//import './App.css';
//import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';


class CartWidget extends Component {

    render() {
      return (
        <div className="App">
    
            <Navbar.Brand href="#home" >
              <img alt="imagenTipo" src={logo} width="40" height="40" />{' '}
              Crypto Marketcap
            </Navbar.Brand>
       
        </div>
        
      );
    }
  }
  
export default CartWidget;

