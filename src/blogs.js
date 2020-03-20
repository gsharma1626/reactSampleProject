import React, {useState} from 'react';

function Blog(){
    const[name,numberOne] = useState("Gaurav");
    const[secondname,numberTwo] = useState("Avni");
    const handleClick = () => {
        numberOne("Sharma");
        numberTwo("Kaushik");
    };


        return(
            <React.Fragment>
                <h1>My name : {name}</h1>
                <h1>Babu name : {secondname}</h1>
                <button onClick={handleClick} type="button">Change</button>
            </React.Fragment>
        ) ;
    }

export default Blog;