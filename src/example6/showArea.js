import React,{useContext} from 'react';
import {ColorContent} from "./Color"
function ShowArea(){
    let {color} = useContext(ColorContent)
    return (
        <div style={{color:color}}>字体颜色</div>
    )
}
export default ShowArea;