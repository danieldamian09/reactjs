import React from 'react';

export default function FuncionesProps (props) {
    // pasando funciones entre los componentes por props

        // const saludar = () => {
        //     console.log("Hola Humberto");
        // }


    return (
        <div>
            <button onClick={ () => props.saludarFn(props.userInfo.nombre)}>Saludar</button>
            {/* para que el evento onClick no se ejecute solo hay que hacer una
            funcion anonima de tipo flecha */}
        </div>
    );

};