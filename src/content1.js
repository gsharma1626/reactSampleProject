import React from 'react';
import logo from './logo.JPG';

class HomeList extends React.Component{
    state={
        home:"Home",
        about:"About Me",
        blog:"My Blogs",
        creativity:"My Creativity",
        contact:"Contact",
        login:"Login",
    };
    render(){
        return(
<div className="contentmain">
<div >< img className="logoga" src={logo} alt="logo" /></div>

    <div className="flex-container">
    <div>{this.state.home}</div>
    <div>{this.state.about}</div>
    <div>{this.state.blog}</div>
    <div>{this.state.creativity}</div>
    <div>{this.state.contact}</div>
    <div className="loginaa">{this.state.login}</div>
    </div>
   
</div>
        );
    }

}
export default HomeList;