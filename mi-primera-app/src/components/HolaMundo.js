import React from 'react';

// funcion que renderiza el componente
// lo mejor es llamar a la funcion como se llama el componente

export default function HolaMundo() {
    // aca es donde podemos ejecutar funciones
    const miFuncion = () =>{
        console.log('Esto es una funcion');
    };

    miFuncion();



    // ------------------------RETURN---------------------------
    // es obligatorio que nuestra funcion tenga un return
    // el return solo puede retornar un solo objeto por eso esta en un <div>
    // podemos utilizar un fragment tambien <> </> para encapsular
    return (
        <div>
            <h1>Hola Mundo</h1>
            <h2>Humberto Rivero</h2>
        </div>
    )
}

// export function AdiosMundo() {
//     return(
//         <div>
//             <h3>Adios</h3>
//         </div>
//     )
// }


// hay dos formas diferentes de exportar un componente para poderlo reutilizar
// si tenemos que englobar nuestro componente con otro lo hacemos de la siguiente manera:

// export default HolaMUndo;


// la otra forma es adelante de la funcion

// -------------------------------------------------------------------------

// siempre debemos recordar que un fichero solo puede tener una sola exportacion
// vamos a agrgar otra funcion a este componente y vamos a exportar

// hemos agrgado la function AdiosMUndo solo con agrgar la palabra (export)
// delante de la funcion funciona

// para importar en App se exporta el que esta en defaul solo ejm: HolaMUndo
// en {} el que no esta por defaul con una , de separaracion
