import '../App.css';
// import { useState } from 'react';
// import image1 from '../assets/images/yo.png';
// import image2 from '../assets/images/amigos.png';
// import ComidasFavoritas from './ComidasFavoritas';
import  Form  from '../components/Form';

function Contact() {

  /*
  const initialState = {
    descripcion: "Me llamo Matias, tengo 26 años y me gusta jugar a los jueguitos",
    boton: "Leer Mas",
    imagen: image1,
  };

  const [state, setState] = useState(initialState);

  const changeDescripcion = () => {
    setState((prevState) => ({
      descripcion:
        prevState.descripcion === "Me llamo Matias, tengo 26 años y me gusta jugar a los jueguitos"
          ? "En vacaciones nos gusta ir a Punta del Este con mis amigos"
          : "Me llamo Matias, tengo 26 años y me gusta jugar a los jueguitos",
      boton: prevState.boton === "Leer Mas" ? "Leer Menos" : "Leer Mas",
      imagen: prevState.imagen === image1 ? image2 : image1,
    }));
  };

  const comidas = [
    {
        id: 0,
        platoPrincipal: "Doble Cuarto de Libra",
        restaurante: "McDonals",
        precio: "500"
    }, {
        id: 1,
        platoPrincipal: "Mega Straker triple",
        restaurante: "Burguer King",
        precio: "600"
    }, {
        id: 2,
        platoPrincipal: "Hamburguesa del Dibu",
        restaurante: "Mostaza",
        precio: "450"
    }, {
        id: 3,
        platoPrincipal: "Asado con fritas",
        restaurante: "Don Peperoni",
        precio: "800"
    }, {
      id: 4,
      platoPrincipal: "Asado con fritas",
      restaurante: "Locatti",
      precio: "1200"
  }
]

*/

  return (
    <div className='contactContainer'>

    <Form />





      {/* 
      <div className='descripcion'>
        <img className='img-yo' height={400} width={400} src={state.imagen} alt="Matias"></img>
        <div className='descripcionTxt'>
          <p>{state.descripcion}</p>
          <button className='buttonContact' onClick={changeDescripcion}>{state.boton}</button>
        </div>
      </div>
      <div>
            <h2>Alguna de mis comidas favoritas:</h2>
            <div>
                 <h4><ComidasFavoritas data={comidas} /> <br></br></h4>
            </div>
      </div>
    */}
    </div>
  );
}

export default Contact;