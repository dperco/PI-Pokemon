import React from 'react';
import  { useEffect,Fragment,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import {getPokemon,orderByName, orderByPower,orderCreated,getTypes,filterTypes} from '../actions';
import Paginado from './Paging';
import Card from './Card';
import SearchBar from './Searchbar';

import './styles/Home.css';
export default function Home (){

  const dispatch = useDispatch ();
  const pokemons= useSelector((state)=> state.pokemon);
   const typesSeleccionados=useSelector((state => state.types));
   const [currentPage,setcurrentPage]= useState(1);
   const [pokePerPage,]= useState(12);   
   const indexlastPoke= (currentPage * pokePerPage );
   const indexfirstPok= (indexlastPoke - pokePerPage);
   let pokPageActual=[];
  const  paginated=(NunberPage) =>{(setcurrentPage(NunberPage))};
  pokPageActual=pokemons.slice(indexfirstPok,indexlastPoke) ;
  const [,setOrder]=useState('');
   const [,setPop]=useState('');
    useEffect (()=>{ 
        dispatch(getPokemon());  //traigo los pOKEMON
   },[dispatch]);

   useEffect(() => {             //traigo los types
    dispatch(getTypes());
    },[dispatch]); 

   useEffect(()=>{                  //me muestra desde cualquier pagina  los elementos filtrados
       setcurrentPage(1)
   },[pokemons]);
   

   function handleClick(e){   //resetea POKEMON
    e.preventDefault();
    dispatch(getPokemon())
     };

 function handleSort(e){            //ordena  por abecedario
      e.preventDefault();
      dispatch(orderByName(e.target.value))
      setcurrentPage(1)
      setOrder(`Orden ${e.target.value}`)
 };

 function handlePower(e){      //ordena  por cant poblacion
  e.preventDefault();
  console.log('orderByPower');
  dispatch(orderByPower(e.target.value));
  setcurrentPage(1);
  setPop(`Orden ${e.target.value}`);
};






function handleCreated(e){
  e.preventDefault();
  dispatch(orderCreated(e.target.value))

};

function handleTypes(e){
  e.preventDefault();
  dispatch(filterTypes(e.target.value));

};


     
   return(
       <div className='body'>
            <h3><Link to='/temperament'> Crear  Pokemon</Link></h3>

           <h1 className='h1'>  Bienvenidos al Home de Pokemon </h1>
           <button onClick={e=>{handleClick(e)}}  className='recarga'> Recargar Pokemon</button>
           <div className='search'>
            <SearchBar/> 
           </div>
           <div className='select'>
                <select onChange={e=>{handleSort(e)}}>
                    <option >Por Orden Alfabetico</option>
                    <option value='asc'>Ascendente A-Z</option>
                    <option value='desc'>Decendente Z-A</option>
                </select>

                <select onChange={e=>{handlePower(e)}}>
                     <option>Orden por Fuerza</option>
                    <option value='asc'>Mayor Fuerza</option>
                    <option value='desc'>Menor Fuerza</option>
                </select>

               

                <select onClick={e=>{handleCreated(e)}}>
                     <option>Filtrar Pokemon </option>
                    <option value='create'>Pokemon Creados</option>
                    <option value='api'>Pokemon Api</option>
                    
                </select>

                
               
                <select onChange ={e => handleTypes(e)} defaultValue="default">
            <option value='default' disabled='disabled' >Filter by types</option>
                <option value='allT' key="allT">All types</option>
                { typesSeleccionados && typesSeleccionados.map(d =>  {
                  return(
                    <option key={d} value={d}>{d}</option>)
})}
               </select>

           </div>
           <div  className='Paginado'>                  
                      <Paginado
                        pokePerPage={pokePerPage}
                        pokemon={pokemons.length}              
                        paginado={paginated}                             
                      />
                    
                </div>
           <div  className='inicio' ><Link to='/'><button >Volver inicio</button></Link></div>
             <div className='Card'> 
                {console.log(pokPageActual)}
                {   
                pokPageActual?.map((c) => {
                
                  return (
                <Fragment   >   
                     <Link  to={"/home/" + c.id}> 
                        <Card  name={c.name} 
                               image={c.image}
                               types={c.types}
                               
                                 
                           /> 
                           <Link to={`/home/${c.id}`} className='det'> Detalles</Link>
                     </Link>
                     
                                
                 </Fragment>
                 
                 );
                   }
                )
                
               } 
          </div>
                        
       </div>
   )
}


