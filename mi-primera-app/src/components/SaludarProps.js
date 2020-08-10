import React from 'react';

// pasando propiedades de un objeto mediante props al componente
export default function SaludarProps(props) {
    // la props llegan dentro de la funcion es decir ()
    console.log(props);
    console.log(props.userInfo.nombre);
    console.log(props.userInfo.edad);
    console.log(props.userInfo.color);


    return (
        <div>
            <p>Hola {props.userInfo.nombre}</p>
            <p>Tiene {props.userInfo.edad} años</p>
            <p>Su color favorito es {props.userInfo.color}</p>
        </div>
    )
}