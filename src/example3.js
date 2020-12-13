import React,{useState} from 'react';
import Conter from "./Conter"
// export const Content = createContext()
function Example3(){
    let [count,setCount] = useState(0)
    return (
        <div>
            <h3>You click {count}</h3>
            <button onClick={() =>{setCount(++count)}}>Click</button>
           
            <Conter count={count}/>
         
        </div>
    )
}
export default Example3;