import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Formulario from './components/Formulario';
import Ganadores from './components/Ganadores';
import Error from './components/Error';

import magicHat from './hat3.png';


function App() {

  //Declaramos el state para el formulario
  const[sorteo, guardarSorteo] = useState({
    lista:''
  });

  const[ ganadores, guardarGanadores] = useState('');

  const[ error, guardarError] = useState(false);

  let resultado;

  if(error){
    resultado= <Error mensaje="No hay resultados"/>
  }else{
    resultado = <Ganadores ganadores={ganadores}/>
  }

  return (

    <div className="container">
      <Header/>   
        <div className="mainContainer">   
          <div className="row">
            <div className="col-6">
              <img className="imagen" src={magicHat} alt="sombrero magico"/> 
            </div>
            <div className="col-6">
              <Formulario 
                sorteo={sorteo}
                guardarSorteo={guardarSorteo}
                guardarGanadores={guardarGanadores}
              />
              <br/>
              {resultado}
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
