import React from 'react';
// import {Content} from "./example3"
function Conter(props){
    // const count = useContext(Content)
    console.log(props)
    return (
        <div>{props.count}</div>
    )
}
export default Conter;