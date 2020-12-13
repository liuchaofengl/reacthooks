import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router ,Route, Link} from "react-router-dom"
function Index(){
    useEffect(() => {
        console.log("欢迎来到Index页面")
        return ()=>{
            console.log('离开Index了')
        }
    },[])
    return (
        <div>我是Index页面</div>
    )
}

function Login(){
    useEffect(() => {
        console.log('欢迎来到Login')
    })
    return (
        <div>我是Login页面</div>
    )
}
function Example1(){
    let [count,setCount] = useState(0)
    useEffect(() =>{
        return () =>{
            console.log('计数器解绑啦')
        }
    },[])
    return (
        <div>
            <h3>You click {count}</h3>
            <button onClick={() => {setCount(++count)}}>添加</button>

            <Router>
                <ul>
                    <li><Link to="/">Index</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                <Route path="/" exact component={Index}></Route>
                <Route path="/login" component={Login}></Route>
            </Router>

        </div>
    )
}
export default Example1