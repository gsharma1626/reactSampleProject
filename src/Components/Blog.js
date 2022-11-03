import React, {useState} from 'react';


function Blog(){
    const[name,numberOne] = useState("Gaurav");
    const[secondname,numberTwo] = useState("Sharma");
    const myRef = React.useRef(null);
    const myRef1 = React.useRef(null);
    
    const handleClick = () => {
        numberOne("I am an useRef hook-1");
        numberTwo("I am an useRef hook-2");
        myRef.current.style.color="red";
        myRef1.current.style.color="yellow";
    };


        return(
            <React.Fragment>
                <h4>I Implemented "useRef" and click event in the below data.</h4>
                <h5 ref={myRef}>My First Name : {name}</h5>
                <h5 ref={myRef1}>My Second Name : {secondname}</h5>
                <button onClick={handleClick} type="button" >Click Me</button>
            
 
            </React.Fragment>
        ) ;
    }

export default Blog;