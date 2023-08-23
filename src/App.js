import React from 'react';
//import Signup from './components/Signup/Signup';
//import Login from './components/Login/Login';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App()
{
    return(
      <div className="App">
        <Home />
        {/*<BrowserRouter>

        <Routes>

          <Route path ='/' element = {<Login/>}/>
          <Route path ='/signup' element = {<Signup/>}/>
          <Route path ='/home' element = {<Home/>}/>

        </Routes>

    </BrowserRouter>*/}
        
      </div>
    );
}
export default App;

