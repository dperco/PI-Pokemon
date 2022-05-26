import React from "react";
import { useState, useEffect} from "react";
import {Link  } from "react-router-dom";
import { postPoke ,  getForm } from "../actions/index";
import {useDispatch , useSelector} from "react-redux";
import "./styles/form.css"

function validate (input){
   
    let a=Boolean
    a=true;
   
    
    
     
     if(input.name.length < 3  || !isNaN(input.name)){
         alert('nombre erroneo  deben ser mas de de 3 caracteres tipo letras');
        a=false;
     };

     if(!input.image){
        alert('debe cargar url  de una  imagen ,debe tener  menos de 255 caracteres');
        a=false;
    };
     
    if (input.lifes < 0 || !input.lifes){
        alert('valor de vidas incorrecto ,debe ser un numero mayor a 0');
         a=false;             
    }
    
                
    if (input.attack < 0 || !input.attack){
        alert('valor de fuerza erroneo, debe ser un numero mayor a 0');
        a=false;  
    }
                  
    if(input.defense < 0 || !input.defense){
            alert('valor de defensa  erronea ,debe ser un numero mayor a 0 ');
            a=false;                    
    }  
    
    if(input.speed < 0 || !input.speed ){
        alert('valor de velocidad incorrecto debe ser un numero mayor a 0');
        a=false;
    }

    if(input.height < 0 || !input.height){
        alert('altura  ingresada incorrecto debe ser un numero mayor a 0');
        a=false;
    }

    if(input.weight < 0 || !input.weight ){
        alert('peso   ingresado incorrecto debe ser un numero mayor a 0');
        a=false
    }
   
    
     if(input.type.length === 0 ){
         alert('debe  ingresar  un type ');
         a=false;
    // }
    //else { alert ('debe ingresar un type');a=false;  
     
     };
    
    if(a ){
        alert('raza creada');
        return true
    }else{
        alert('error en la carga de datos')
        return false
    }
    
    
       
};
    
export default function Form (){

    const dispatch=useDispatch();
    const tipes=useSelector((state=> state.types));
    
    const [,setError]= useState({});
   // const [AvailableTypes, setAvailableTypes] = useState(tipes);

    const [input,setInput]= useState({
       
        name:"",
        image:"",
        lifes:"",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:"",
        type:[],

    });

     useEffect(()=>{
        dispatch(getForm())
     },[dispatch]);
    
     function handleChange(e){
        e.preventDefault();
                setInput ({
                    ...input,
                    [e.target.name]: e.target.value
                });
             
    };
     function handleSelect (e){
        e.preventDefault();
         if(!input.type.includes(e.target.value)){
            setInput ({
                ...input,
                type:
                [...input.type,e.target.value]
            });
          if(input.type.length > 4){
             setError('cantidad temp excesiva')
          }
        }   
    };
       
    function handleDelete(e){
        
        //var finded= input.type.findIndex(el => el === e.target.name)
        setInput({
            ...input,
            //input.type.filter((el,index) => index !== finded)
             //...input,
            type: input.type.filter(elem => elem !== e)
    });
        // setAvailableTypes(
        //    [...tipes.filter(type => !input.type.includes(type))] 
        // )
        if(input.type.length <=6 ){
            setError("")
        }
    };
    
    function handleSubmit (e){
        e.preventDefault();
        // setError(validate({
        //     ...input,
        //     [e.target.value]:e.target.value
        //  }));
         
     if (validate(input)){
          dispatch(postPoke(input));
        }else{
            return alert('error 404 en los datos');
        } 
     setInput({
            name:"",
            image:"",
            lifes:"",
            attack:"",
            defense:"",
            speed:"",
            height:"",
            weight:"",
            type:[],
          })};
          
             
    return(

        <div className="form">
              <Link to="/home"><button>Volver</button></Link>
              
              <form action="editor.cgi"  method="POST" className="formato">
              <button type='submit'  onClick={(e)=> handleSubmit(e)}>Crear Pokemon</button>
                <p className="warnings"  id="warnings"></p> 
                <ul  >{input.type.map(el=> el + ',')}</ul>
    
              <div>
                    <label > Nombres : <p></p></label>
                    <input  type='text' value={input.name} name="name"   onChange={(e) => handleChange(e)} required/>
                    <span className="barra"></span>
                </div>
                
                <div>
                       <label> Imagen :<p></p> </label>
                      <input  type='text' value={input.image} name="image" onChange={(e) => handleChange(e)} required/>
                      <span className="barra"></span>
                </div>
                
                <div>
                    <label> Vidas : <p></p></label>
                    <input  type='text' value={input.lifes} name="lifes" onChange={(e) => handleChange(e)} min='1' required />
                    <span className="barra"></span>
                </div>
                
                <div>
                    <label > Fuerza : <p></p></label>
                    <input  type='text' value={input.attack} name="attack"   onChange={(e) => handleChange(e)} min='1' required/>
                    <span className="barra"></span>

                </div>
                
                <div>
                    <label > Defensa : <p></p></label>
                    <input  type='text' value={input.defense} name="defense"  onChange={(e) => handleChange(e)} min='1'  required/>
                    <span className="barra"></span>
                </div>
                
                <div>
                       <label> Velocidad : <p></p></label>
                      <input  type='text' value={input.speed} name="speed"   onChange={(e) => handleChange(e)}  min='1' required/>
                      <span className="barra"></span>
                </div>
                
                <div>
                       <label> Altura : <p></p></label>
                      <input  type='text' value={input.height} name="height"   onChange={(e) => handleChange(e)} min='1'  required/>
                      <span className="barra"></span>
                </div>
                
                <div>
                       <label className="TEXT"> Peso :<p></p></label>
                      <input   className="text"   type='text' value={input.weight} name="weight"   onChange={(e) => handleChange(e)}  min='1' required />
                      <span className="barra"></span>
                </div>
                <div>
                <label>Tipos:   </label>
                <br></br>
                <select  className="select1"  id='select' required='required' onChange={(e)=> handleSelect(e)} >
                    <option value={input.tipes} name='tipes'></option>
                    {tipes.map((el)=>(
                         <option key={el}value={el}>{el} </option>
                        
                    ))
                    
                    }
                    
                </select>
                </div>
                < div >
               {
                     input.type.map(elem =>   //borrar  
                     <div key={elem.name} >
                      <h6>{elem}</h6>
                      <button onClick={() => handleDelete(elem)}>X</button>
                     </div>
                     )
                }
                
              </div>
              {/* <button type='submit'  onClick={(e)=> handleSubmit(e)}>Crear Pokemon</button>
                <p className="warnings"  id="warnings"></p> 
                <ul  >{input.type.map(el=> el + ',')}</ul> */}

              </form>

        </div>
    )
}