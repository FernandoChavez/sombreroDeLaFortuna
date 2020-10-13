import React from 'react'


const Error = ({mensaje}) => {
    return (
    <p className="alert alert-danger error" role="alert">{mensaje}</p>        
    );
}



export default Error;