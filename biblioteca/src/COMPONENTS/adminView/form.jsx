import React from "react";

const Form = ()=> {
    return(
        <React.Fragment>
            <div className='tableTitle'>Tabla de Libros Activos</div>
            <ul className='titles'>
                <tr className='booksTitles'>
                    <td>Nombre</td>
                    <td>Categoria</td>
                    <td>Autor</td>
                    <td>Fecha inicio prestamo</td>
                    <td>Fecha finalizacion de prestamo</td>
                </tr>
            </ul>
        </React.Fragment>
    )
}

export default Form;