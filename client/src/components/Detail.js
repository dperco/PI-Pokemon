import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {getDetail,clearDetail} from '../actions';
import { useEffect } from 'react';
//import Card from './Card';
import './styles/Detail.css';

export default function Detail(props){
    
    const dispatch = useDispatch();

   

    useEffect(()=>{
        dispatch(clearDetail());
        dispatch(getDetail(props.match.params.id));
        // return () => {
        //     window.removeEventListener("resize", )
        //   }

        // return function cleanup() {
        //     getDetail();
        // }
        
        // dispatch(()=>{
        //     console.log('reseteo');
        // },[]);
        

        }
    ,[dispatch,props.match.params.id]);

    //let [reset,setReset]=useState();

    // function handleClick(e){   //resetea POKEMON
        
    //     dispatch(getPokemon())
    //      };

    // useEffect(() =>{
    //     dispatch(getDetail())
    //   },[])


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
                        
                               
                     
                
                    
            
           
           <Link to='/home' >
               
                   
                       
                   
                   
                   <button >volver</button>
           
           
           
           
           </Link>      
        </div>
        
      
 )
   
}