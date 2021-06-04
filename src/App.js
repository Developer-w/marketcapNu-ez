//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg='colorNabVAr' variant='dark' fixed="top">
        <Navbar.Brand>
          <img src={"logo"} />{' '}
          Logo
        </Navbar.Brand>
      </Navbar>
      <div className="content">
        Aqui ira el contenido del Header
      </div>
    </div>
  );
}

export default App;
