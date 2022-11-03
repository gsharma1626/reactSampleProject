import React from 'react';
import { addresDetails } from '../AppData';
const AboutMe =(props)=>{
const adddata = React.useContext(addresDetails);
    return(

        <>
        <h4>The below data is coming from context API with the help of useContext hook.</h4>
        <p>{adddata}</p>
        </>
    )
}

export default AboutMe;