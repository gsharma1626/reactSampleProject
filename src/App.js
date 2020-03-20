import React, { Component } from 'react';
import './App.css';
//import Listday from './listday';
import  HomeList from './content1';
//import logo from './logo.JPG';
import Clickevent from './clickevent';

//import Blog from './blogs';
class App extends Component {

  render() {
    return (
      <div>
<HomeList/>
<br></br>
<br></br>
  
{/* <Listday/> */}
<AppNew name="Gaurav" />
<Clickevent number = '21' />
 {/* <Blog/> */}
      </div>
  
    );
  }
}
const AppNew = props => {
    return(
<div><h1>Hello,{props.name}</h1></div>
    );
  }

export default App;
