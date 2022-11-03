import React,{useEffect, useState} from 'react';
import useCustomeData from '../HookCustome';

const Clickevent =()=>{
const datac = useCustomeData();
const[count, setCount] = useState(0);
    React.useMemo(()=>{
    
    console.log("Mycounter")
    },[datac.counting])
    return(
        <>
        <h1>My Counter : {datac.counting}</h1>
        <h1>My Counter2 : {count}</h1>

        <button onClick={datac.handleData}>Plus</button>
        <button onClick={datac.decrementData}>Minus</button>
        </>
    )
}
export default Clickevent;