import React from 'react';
import App from './App';
export const ContextData = React.createContext();
export const addresDetails = React.createContext();
const Appdata =()=>{
    const[blogData, setBlogData]= React.useState('Gaurav Kumar Sharma');
    const[blogDetails, setBlogDetails]= React.useState('Shergarh');
    return(

        <>
        <ContextData.Provider value={blogData}>
            <addresDetails.Provider value={blogDetails}>
            <App/>
            </addresDetails.Provider>
            </ContextData.Provider>
        
        </>
    )
}

export default Appdata;