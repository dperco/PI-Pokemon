import React from 'react';
import './styles/Paging.css';

export default function Paginado ({pokePerPage,pokemon,paginado}){
      const NumeroPage=[];
      for(let e=1 ; e <= Math.ceil(pokemon/pokePerPage);e++){ 
                  NumeroPage.push(e);  
      };
      return (      
                <ul className='paginado' >
                   {
                    NumeroPage && NumeroPage.map(num => (
                    <li>
                    <button key={num} onClick={()=>paginado(num)}>{num}</button>
                    </li>
                    ))
                   };
                </ul>
            );
      };