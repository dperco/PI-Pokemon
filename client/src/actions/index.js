import axios from 'axios'



export function getPokemon(){      //traer Pokemon
    return async function(dispatch){

       return await axios
            .get("http://localhost:3001/pokemons")
            .then((res)=>{
              console.log(res.data)
                dispatch({
                    type: 'GET_POKEMON',
                    payload: res.data
                })
            })
    }
};


export function orderByName(payload){    //ordenar x abecedario
    return {
        type:'ORDER_BY_NAME',
        payload
    }
} ;

export function orderByPower(payload){  //ordenar x peso
    return {
        type:'ORDER_BY_POWER',
        payload
    }
} 


export function getNamePokemon(name){        //buscar Pokemon x nombre
    return async function(dispatch){
       try{
            var json = await axios.get("http://localhost:3001/pokemons?name="+name);
           if(json.data.length){
                     return dispatch({
                     type: 'GET_NAME_POKEMON',
                     payload : json.data
                     });
                    }else{
                        console.log('no existe el POKEMON ');
                    }
       }catch(error){
           console.log(error)
       }


     }
 };

export function getDetail(id){    // traer pokemon
    return async  function (dispatch){
    try{
        let json= await axios.get(`http://localhost:3001/pokemons/${id}`);
       // console.log(json.data)
        return dispatch({
            type: 'GET_DETAIL',
            payload: json.data 
        })
    }
    catch(error){
        console.log(error)
    }
}
};

export function orderCreated(payload){ // crea una Pokemon
    return {
        type:'FILTER_CREATED',
        payload
    }
};


export function getTypes() {        //traer  types
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/types",{});
       // console.log(json.data);
        return dispatch({
            type:'GET_TYPES',
            payload: json.data
})}};

export function postPoke(payload){    // el post de Pokemon
    return async  function (dispatch){
       try{
        let resp= await axios.post("http://localhost:3001/pokemons",payload);
       // console.log(resp)
        return dispatch({
            type: 'POST_POKEMON',
            payload: resp.data
        
        })
        
       }
       catch(error){
           console.log(error)
       }
    }
};

export function filterTypes(payload){   //filtro por types
    return {
        type: 'FILTER_TYPES',
        payload
    };
};

export function getForm() {        //para agregar al formulario
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/types");
        console.log(json.data);
        return dispatch({
            type:'GET_FORMS',
            payload: json.data
})}};

export function clearDetail(){
    return {
        type : 'CLEAR_DETAIL',
    }
};



