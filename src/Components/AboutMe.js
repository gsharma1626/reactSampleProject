import React from 'react';
import { addresDetails } from '../AppData';
const AboutMe =(props)=>{
const adddata = React.useContext(addresDetails);
    return(

        <>
        <h1>{props.name}</h1>
        <h1>{adddata}</h1>
        </>
    )
}

export default AboutMe;