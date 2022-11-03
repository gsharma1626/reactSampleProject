import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import AppLayout from './Components/AppLayout';
import Home from './Components/Home';
import Blog from './Components/Blog';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import NoPage from './Components/NoPage'
const App = ()=>{

const[myName, setMyName] = React.useState('Gaurav Kumar Sharma');

  return(

    <>
    <BrowserRouter>
    <Routes>
<Route path ='/' element={<AppLayout/>}>
  <Route index element={<Home/>}/>
  <Route path ='/blog' element={<Blog/>}/>
  <Route path ='/AboutMe' element={<AboutMe name ={myName}/>}/>
  <Route path="/Contact" element ={<Contact/>}/>
  <Route path ="*" element ={<NoPage/>}/>
</Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;