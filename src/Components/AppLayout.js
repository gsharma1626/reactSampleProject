import React from 'react';
import logo from '../../src/logo.JPG';
import { Outlet, Link } from 'react-router-dom';
import '../../src/App.css'


const AppLayout =()=>{
        return(
            <>
<nav className="contentmain">
<div >< img className="logoga" src={logo} alt="logo" /></div>

    <div className="flex-container">
    <div> <Link to ="/">Home</Link></div>
    <div> <Link to ="/AboutMe">About Me</Link></div>
    <div> <Link to ="/blog">Blog</Link></div>
    <div><Link to ="/Contact">Contact</Link></div>
    </div>
   
</nav>
<Outlet />
</>
        );
    }


export default AppLayout;