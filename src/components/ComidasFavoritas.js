import React from 'react';
import '../App.css';

function ComidasFavoritas(props) {

     // Ordenar comidas por precio en orden ascendente
     const sortedComidas = props.data.sort((a, b) => a.precio - b.precio);

    // Filtrar comidas por precio menor que 1000 (puedes cambiar la condición si es necesario)
    const filtrarComidas = sortedComidas.filter((filtro) => {
        return filtro.precio < 1000;
    });

    const mostrarComidas = filtrarComidas.map((comida) => {
        const platosFav = `${comida.platoPrincipal} - $ ${comida.precio} de ${comida.restaurante}`
        return <li className='comidaLi' key={comida.id}>{platosFav}</li>;
    });

    return (
        <ul className="comidaFlex">
            {mostrarComidas}
        </ul>
    );
}

export default ComidasFavoritas;