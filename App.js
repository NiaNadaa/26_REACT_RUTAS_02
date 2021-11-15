import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import { useState } from "react";
import './App.css';

import Perros from "./Perros";
import Gatos from "./Gatos";

function App() {

  function Header(){
    
    return(
        <>
        <li><Link to="/perros">Perros</Link></li>
        <li><Link to="/gatos">Gatos</Link></li>
        </>
    )
}


  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/perros" element={<Perros/>}/>
    <Route path="/gatos" element={<Gatos/>} />
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
