//acts like an API
import React from "react"

export const initialState={
    basket: [],
    loggedinuser:null
}


const reducer=(state,action)=>{
    console.log(action)
    switch(action.type){
        case 'Add_TO_Basket':
            return{
                ...state,
                basket:[...state.basket,action.item]
            }
        case 'SET_LOGIN':
            return{
                ...state,
                loggedinuser:action.user
            }
    }
}

export default reducer