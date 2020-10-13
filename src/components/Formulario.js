import React, {useState} from 'react';
import Error from './Error';


//const Formulario = ({lista, guardarListaParticipantes}) =>{
const Formulario = ({sorteo, guardarSorteo, guardarGanadores}) =>{

   
  
    //extract variables
    const {lista} = sorteo;

    const [error, guardarError] = useState(false);


    //Funcion que coloca los elementos de la lista en el state
    const handleChange = e => {
        // actualizar el state
        guardarSorteo({
            ...sorteo,
            [e.target.name] : e.target.value
        });
    }

    // Cuando el usuario da submit al form
    const handleSubmit = e => {
        e.preventDefault();
       
        //Activar error si la lista esta vacia
        if(lista.trim()===''){
            guardarError(true);
            return;
        }
        //VALIDACION

        //Guardamos valores por cada salto de linea en un arreglo
        let participantes = lista.split("\n");

        //Usamos map para eliminar los espacios por los 2 lados de uns string
        participantes=participantes.map(x => x.trim());
       
        //Filtramos el array, evitando agregar los index con "" valor 
        participantes = participantes.filter(el => el);

        //Filter para no agregar participantes duplicados
        participantes = participantes.filter((item, index) => participantes.indexOf(item) === index);
       
        //Activar error si la lista tiene menos de 2 participantes
        if(participantes.length<2){
            guardarError(true);
            return;
        }

        guardarError(false);
        //seleccionar ganador
        let ganador = participantes[Math.floor(Math.random() * participantes.length)];
        guardarGanadores(ganador);
    }

    return(
        <form className="formulario"
            onSubmit={handleSubmit}
        >

        {error ? <Error mensaje="Agregue mas participantes" /> : null}   
            
            <div className="form-group">
                <label className="formText">
                        Ingresa aqui la lista de participantes. El minimo es de 2 y los duplicados seran omitidos
                </label>

                <textarea 
                   rows="8"
                   className="form-control"
                   name="lista"    
                   value={lista} 
                   onChange={handleChange}
                />         
                
            </div>
            
            <button type="submit" className="btn btn-success">Encuentra ganador(es)</button>
        </form>
    )

}

export default Formulario;