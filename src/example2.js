import React,{useReducer} from 'react';
function Example2(){
   let [count,dispatch] = useReducer((state,action) =>{
       switch(action.type){
           case 'add':
               return state+1
            case 'incre':
                return state-1
            default:
                return state
       }

   },0)

    return (
        <div>
            <h3>现在的分数 {count}</h3>
            <button onClick={()=>{dispatch({type:'add'})}}>add</button>
            <button onClick={()=>{dispatch({type:"incre"})}}>incre</button>
        </div>
    )
}
export default Example2;