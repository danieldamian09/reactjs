import React from 'react';

export default function FuncionesProps (props) {
    // pasando funciones entre los componentes por props
    // utilizando destructuring
    console.log(props);
    const { userInfo, saludarFn } = props;
    console.log(userInfo);
    console.log(saludarFn);
    // para hacer destructuring del objeto userInfo:
    // para asignar un valor por defaul a la variable nombre:
    const {nombre = "Anonimo", edad} = userInfo

        // const saludar = () => {
        //     console.log("Hola Humberto");
        // }


    return (
        <div>
            {/* <button onClick={ () => props.saludarFn(props.userInfo.nombre)}>Saludar</button> */}
            {/* utilizando destructuring */}
            <button onClick={() => saludarFn(nombre, edad)}>Saludar</button>
            {/* para que el evento onClick no se ejecute solo hay que hacer una
            funcion anonima de tipo flecha */}
        </div>
    );

};