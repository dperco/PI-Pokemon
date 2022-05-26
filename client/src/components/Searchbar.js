 import React from 'react';
 import { useState ,} from 'react';
 import {useDispatch ,useSelector} from 'react-redux';

 import { getNamePokemon} from '../actions';


export default function SearchBar(){
    const pokemons= useSelector((state)=> state.pokemon);
      
      const dispatch=useDispatch();
      const [name,setName]= useState('');

      function handleInputChange(e){
          e.preventDefault();
          setName(e.target.value)
          console.log(name)
      };
      function handleSubmit(e) {
        e.preventDefault();
        let aux=pokemons.filter(e=>e.name.toLowerCase() === name.toLowerCase());

        if(aux.length === 0 ) {
            alert("Ingreso Nombre incorrecto o Pokemon no existe");
            
       }else{
        if ( name !== "" && aux){
          console.log (name, "BUSCAR");
          dispatch(getNamePokemon(name));
          
          setName("");
             
        }
      }
         
    };

     

      return(
        <div> 
            
             
               <div>
        <input type = 'text' value ={name} placeholder = 'Buscar Pokemon' onChange= {(e)=> handleInputChange(e)}/>
        <button  type = 'submit' onClick = {(e)=> handleSubmit(e)}>Buscar</button>
    </div>
             
        </div>
      )

}

