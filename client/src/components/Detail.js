import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {getDetail} from '../actions';
import { useEffect } from 'react';
//import Card from './Card';
import './styles/Detail.css';

export default function Detail(props){
    
    const dispatch = useDispatch();

    useEffect(()=>{
      
         dispatch(getDetail(props.match.params.id))
       
    },[dispatch,props.match.params.id]);

    const filtrado=useSelector((state)=> state.detail);

    if(!filtrado.type){filtrado.type='None'}
    
        return(  
           
            <div className='detalle'>
                   {console.log(filtrado)}
           
                  
                     
                      
                        
                         <div>                       
                            <img src={filtrado.image} weight='150px' height='100px' alt=''/>
                             <p>Nombre={filtrado.name} </p>
                             <p>Id={filtrado.id}</p>
                             <p>Types = {filtrado.types +','}</p>
                             <p> Vidas ={filtrado.lifes} puntos</p>
                             <p> Peso={filtrado.weight} hectogramos</p> 
                             <p> Altura={filtrado.height} decimetros</p>
                             <p> Fuerza ={filtrado.attack} puntos</p>
                             <p>Defensa={filtrado.defense}  puntos</p>
                             <p>Velocidad ={filtrado.speed} puntos</p>
                                                                                        
                         </div>
                        
                               
                     
                
                    
            
           
           <Link to='/home' ><button>volver</button></Link>      
        </div>
        
      
 )
   
}