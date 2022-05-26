

const inicioState={
    pokemon:[],
    allpokemon:[],
    types:[],
    detail:{}
}

function rootReducer (state=inicioState,action) {
    switch (action.type){
        case 'GET_POKEMON':  //traigo los POKEMON
               return{
                    ...state,
                    pokemon: action.payload,
                    allpokemon:action.payload
                       
               };
        case 'GET_NAME_POKEMON': 
                  //busca  pokemon x nombre
            //console.log(action.payload);
            return{
                ...state,
                pokemon: action.payload

            };

        case 'FILTER_CREATED':          //filtra por Pokemon Creados o no 
       // let  allpok2=state.pokemon;
        let allpok3=state.allpokemon;
        let filtro=[];
                           
       if(action.payload === 'create') {filtro = allpok3.filter(el => isNaN(el.id))}
        else{  filtro = allpok3.filter(e=>Number(e.id)) }            

       // console.log(filtro);  
        
         return { 
             ...state,
             pokemon: filtro
         
         };
        
        
         case 'GET_TYPES':   //  trae los types
                 
                return{
                  ...state,
                  types : action.payload
                };
       
        
        
        case 'ORDER_BY_NAME':       //ordena por abecedario
                 let sorteArr= action.payload === 'asc' ? 
                 state.pokemon.sort(function(a,b){
                     if(a.name > b.name){
                         return 1;
                     }
                     if(b.name > a.name){
                         return -1;
                     }
                      return 0;
                     
                 }) :
                 state.pokemon.sort(function(a,b){
                     if(a.name > b.name){
                         return -1;
                     }
                     if(b.name > a.name){
                         return 1;
                     }
                     return 0;
                 }) 
                 return{
                    ...state,
                     pokemon:sorteArr
              } ;
                 
        case 'ORDER_BY_POWER':     //ordena x cantidad de peso
            const  popul= action.payload === 'asc' ? 
                    state.pokemon.sort(function(a,b){
                         if(a.lifes > b.lifes){
                           return 1;
                         }
                         if(b.lifes > a.lifes){
                           return -1;
                        }
                        return 0;
                
                    }) :
                       state.pokemon.sort(function(a,b){
                         if(a.lifes > b.lifes){
                             return -1;
                        }
                       if(b.lifes > a.lifes){
                         return 1;
                        }
                       return 0;
                    }) 
               // console.log(popul);
            return{
                ...state,
                pokemon:popul
            };

            
        case 'POST_POKEMON':      //  ruta del post  de pokemon
                return{
                    ...state
                };
        case 'GET_DETAIL':
             return{             
                  ...state,
                  detail: action.payload
               };

        case 'GET_FORMS':   //  trae los types
             
               return{
                 ...state,
                 types:action.payload
               };

         
               case 'FILTER_TYPES':
                let poke3 = state.pokemon;
               
                let pokeType;
                let flag=true;
                if(flag){
                    poke3 = state.pokemon
                }
                if(action.payload === 'allT'){
                    pokeType = state.pokemon
                }
                else{
                pokeType= poke3.filter(d => 
                        d.types && d.types.length && d.types.includes(action.payload)
                    )
                }

               
               // console.log(pokeType);
                if(!pokeType.length){
                    alert('No hay pokemon. resetear pokemon ')
                    pokeType=state.pokemon
                }
                flag = true
    
                return{
                    ...state,
                    pokemon: pokeType
                };
                  
        default : {
                return state;
              }
       
            }


};

export default rootReducer;