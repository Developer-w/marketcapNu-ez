//Importar o Modulo React
import React, { Component } from "react";
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
//import CartWidget from "./ItemListContairner"
import { Card, Button ,Row, Col} from 'react-bootstrap';
import img from '../img/img1.jpeg';

class ItemListContainer extends Component {

    render() {
      return (
        <div className="App">

                <Row  className="text-center">
                    
                        <Col className="m-3">
                            <Card style={{ width: '20rem' }} >
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title>{this.props.title}</Card.Title>
                                    <Card.Text>
                                        {this.props.phrase}
                                    </Card.Text>
                                    <Button variant="primary">{this.props.price}</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    
                </Row>
        </div>
        
      );
    }
  }
  
export default ItemListContainer;