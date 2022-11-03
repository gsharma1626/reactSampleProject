import React, {useContext, useState} from 'react';
import {ContextData} from '../AppData'

function Blog(){
    const[name,numberOne] = useState("Gaurav");
    const[secondname,numberTwo] = useState("Avni");
    const myRef = React.useRef(null);
    const myRef1 = React.useRef(null);
    const data = useContext(ContextData);
    const handleClick = () => {
        numberOne("Sharma");
        numberTwo("Kaushik");
        myRef.current.style.color="red";
        myRef1.current.style.color="yellow";
    };


        return(
            <React.Fragment>
                <h1 ref={myRef}>My name : {name}</h1>
                <h1 ref={myRef1}>Babu name : {secondname}</h1>
                <button onClick={handleClick} type="button" >Change</button>
                
                        <h1>{data}</h1>
 
            </React.Fragment>
        ) ;
    }

export default Blog;