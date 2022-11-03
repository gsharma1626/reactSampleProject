import React from 'react';
import axios from 'axios';
import '../../src/App.css';
const Contact = (props)=>{
const [allData,setAllData] = React.useState([]);
React.useEffect(() => {
    axios('http://localhost:3300/data')
    .then(response => {
    console.log(response.data)
    setAllData(response.data);
    })
    .catch(error => {
    console.log('Error getting fake data: ' + error);
    })
    }, []);
        const styles = {
            display:'inline',
            width:'30%',
            height:50,
            float:'left',
            padding:5,
            border:'0.5px solid black',
            marginBottom:10,
            marginRight:10
            }
// const[myData, setMyData]= React.useState([]);


    return(<>
    <h4>Data is fetched from json server in the below table:</h4>
<table className="tableData">
<tr>
        <th>Title</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Location</th>
        <th>Contact Number</th>
    </tr>
{allData.map((value,index)=>{
return(

   
    <tr key={value.id}>
        <td>{value.title}</td>
        <td>{value.Name}</td>
        <td>{value.gender}</td>
        <td>{value.location}</td>
        <td>{value.Contact}</td>
    </tr>


)
})}
</table>
       </>
    )
}
export default Contact;

{/* var Mydata =["Gaurav Kumar", "Sharma","Bijnor"] */}