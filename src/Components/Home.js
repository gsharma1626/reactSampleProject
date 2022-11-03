import React,{useEffect, useState} from 'react';
import useCustomeData from '../HookCustome';

const Clickevent =()=>{
const datac = useCustomeData();
    React.useMemo(()=>{
    
    console.log("Mycounter")
    },[datac.counting])
    return(
        <>
        <h4>This application is all about my learning and implementing advance feature of React.js along with<br/> HTML5,CSS3,JavaScript etc. 
            Please find the list below:
        </h4>
        <ol>
        <li>Worked on Functional Component</li>
        <li>Implemented React Hooks(UseState,useContext,useEffect,useRef,useMemo)</li>
        <li>Implemented routing</li>
        <li>Implemneted Json server for fetching sample API</li>
        <li>Iimplmneted axios</li>
        </ol>
        <h4>My Counter : {datac.counting}</h4>
        <button onClick={datac.handleData}>Plus</button>
        <button onClick={datac.decrementData}>Minus</button>
        </>
    )
}
export default Clickevent;