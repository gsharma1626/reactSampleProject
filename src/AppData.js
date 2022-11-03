import React from 'react';
import App from './App';

export const addresDetails = React.createContext();
const Appdata =()=>{
    
    const[blogDetails, setBlogDetails]= React.useState(`Hi, this is Gaurav. I have 8+ years of experience.
    I am currently working with IBM as a Senior System`);
    return(

        <>
       
            <addresDetails.Provider value={blogDetails}>
            <App/>
            </addresDetails.Provider>
            
        
        </>
    )
}

export default Appdata;