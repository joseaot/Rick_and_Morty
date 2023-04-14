import { ADD_FAV, REMOVE_FAV } from "./action-types";


export const addFav = (character) => {
    return { type: ADD_FAV, payload: character }
};

export const removeFav = (id)=>{
    return {type: REMOVE_FAV, payload: id}
}


// export const getUsers = () => {
//     return function(dispatch){
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(data => dispatch({type: GET_USERS, payload: data}))
//     }
// }