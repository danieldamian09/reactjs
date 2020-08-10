import React from 'react';
// pasando props basicas entre componentes

export default function Saludar (props) {
    // la props llegan dentro de la funcion es decir ()
    console.log(props);
    console.log(props.name);


    return (
        <div>
            <h2>Hola {props.name} tienes {props.age} años</h2>
        </div>
    )
}