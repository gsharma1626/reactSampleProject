import React from "react";

function useCustomeData(){

    const [counting, setCounting]= React.useState(0);

const handleData = () =>{

    setCounting(counting+1);
};
const decrementData =()=>{
    if(counting<1){
        setCounting(0);
    }
    else{
        setCounting(counting-1);
    }
}
return{
    counting,
    handleData,
    decrementData
}
}
export default useCustomeData;