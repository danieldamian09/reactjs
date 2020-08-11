import React from 'react';
// import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Accordion, Card, Alert } from 'react-bootstrap';
// import { ReactComponent as ReactIcon} from './assets/react.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Contacto from './pages/Contacto';
import QuienSoy from './pages/QuienSoy';

function App() {
  //     const [stateCar, setstateCar] = useState(false);
  //     const [contar, setcontar] = useState(0);

  // useEffect(() => {
  // aca va el codigo que se va a ejecutar y en arreglo la variable que queremos se actualice
  //   console.log("Total :" + contar);
  // }, [contar])


  // const encenderApagar = () => {
  // aca le vamos a asignar el valor contrario del estado actual:
  // setstateCar(!stateCar);
  // para recuperar la informacion del estado desde otro componente, donde no tenemos acceso a stateCar, aca recuperamos el valor actual
  // setstateCar(preValue => !preValue);
  //   setcontar(contar + 1);
  // };


  return (
    <div className="App">
      <h1>React con Boootstrap</h1>
      {/* <Button variant="primary" onClick={() => console.log("Hola")}>Button</Button>
  <h3>El auto esta encendido: {stateCar ? "Encendido" : "Apagado"}</h3>
  <h4>Clicks: {contar}</h4>
      <button onClick={encenderApagar}>Encender / Apagar</button> */}
      {/* <Alert variant="danger">
        Peligro!!!!
      </Alert> */}
      {/* <ReactIcon /> */}

      <Router>
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/contacto">
            <button>Contacto</button>
          </Link>
          <Link to="/quien-soy">
            <button>Quien soy</button>
          </Link>
        </div>

        <Switch>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route patth="/quien-soy">
            <QuienSoy />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
