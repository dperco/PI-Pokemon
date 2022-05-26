import React from "react";

import './styles/Card.css'

export default function Card ({image ,id, name ,types,type,hp}){

    return(

        <div className="format" key={id} >
             <img className="image" src={image} width='200' height='200' alt=''  />
            <h4 className="name">Nombre: {name}</h4> 
            <h4 className="name">Tipos : {types + ','}</h4>
            
               
        </div>
        
    )




}