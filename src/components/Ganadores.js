import React, {useState} from 'react';

import prize from '../steve.jpg';

const Ganadores = ({ganadores}) =>{


    if(!ganadores) return null;

    return (
        <div className="card mb-3 carta-ganadora">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img className="card-img" src={prize} alt="steve"/> 
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">La fortuna de FuerzaDON ha hablado</h5>
                    <p className="card-text">El ganador del DLC de Steve es: <b>{ganadores}</b></p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Ganadores;