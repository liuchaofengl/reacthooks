import React,{useMemo,useState} from 'react';
function  Example7() {
    let [xiaohong,setXiaohong] = useState('小红待客状态')
    let [Zhiling,setZhiling] = useState('志玲待客状态')
    return (
        <>
            <button onClick={() => {setXiaohong(new Date().getTime())}}>小红</button>
            <button onClick={() => {setZhiling(new Date().getTime()+'志玲来给我舔')}}>志玲</button>
            <br/>
            <ChildComponent name={xiaohong}>{Zhiling}</ChildComponent>
        </>
    )
}
export default Example7;
function ChildComponent({name,children}){
    function chanageXiaohong(name){
        console.log('她来了 ，她来了 小红走来了')
        return name+ '小红朝我们走来了'
    }
    const actionXiaohong = useMemo(()=>chanageXiaohong(name),[name])
    return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}