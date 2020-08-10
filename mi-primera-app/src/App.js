import React from 'react';
import logo from './logo.svg';
import './App.css';
// import HolaMundo from './components/HolaMundo'
// para importar dos componentes que no se exportan por default:
// import HolaMUndo, { AdiosMundo } from './components/HolaMundo';
// import HolaMundo from './components/HolaMundo';
// import AdiosMundo from './components/AdiosMundo';
// import Saludar from './components/Saludar';
// import SaludarProps from './components/SaludarProps';
import FuncionesProps from './components/FuncionesProps';


function App() {
    // para pasar variables a los componentes por props
    // const userName = "Humberto Rivero";
    // const age = 36;

    // para pasar objetos a los componetes por props
    const userInfo = {
      nombre: "Humberto Rivero",
      edad: 36,
      color: "azul",
    }

    const saludarFn = (nombre, edad) => {
      // console.log("Hola " + nombre);
      console.log(`Hola ${nombre} tienes ${edad} años`);
    };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* para enviar propiedades en Saludar primero el nombre y luego el valor */}
        {/* <Saludar name="Humberto Rivero" age="36" />
        <Saludar name="Nombre Prueba" age="0" /> */}
        {/* <Saludar name={userName} age={age} /> */}
        {/* <HolaMundo /> */}
        {/* <AdiosMundo /> */}
        {/* <SaludarProps userInfo={userInfo} /> */}
        <FuncionesProps userInfo={userInfo} saludarFn={saludarFn} />
      </header>
    </div>
  );
}

export default App;
