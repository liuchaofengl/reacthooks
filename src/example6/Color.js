import React,{createContext,useReducer} from 'react';
export const ColorContent = createContext()
export const UPDATE_COLOR = 'updateColor'
const reducer = (state,action) => {
    switch(action.type){
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}

function Color(props){
    const [ color, dispatch] = useReducer(reducer,'blue')
   return (
    <ColorContent.Provider value={{color,dispatch}}>
        {props.children}
    </ColorContent.Provider>    
   )
}
export default Color;