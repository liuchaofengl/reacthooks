import Reac,{useContext}  from 'react';
import { ColorContent,UPDATE_COLOR } from "./Color"
function Button(){
   const {dispatch} = useContext(ColorContent)
    return (
        <div>
            <button onClick={()=>{dispatch({type:UPDATE_COLOR,color:'red'})}}> 改为红色</button>
            <button onClick={() => {dispatch({type:UPDATE_COLOR,color:'yellow'})}}>改为黄色</button>
        </div>
    )
}
export default Button;