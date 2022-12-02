import React from "react";

const List = ()=>{
    return(
        <ul className='booksTable'>
            <tr className='books'>
                <td>Nombre</td>
                <td>Categoria</td>
                <td>Autor</td>
                <td>Fecha inicio prestamo</td>
                <td>Fecha finalizacion de prestamo</td>
            </tr>
        </ul>
    )
}

export default List;