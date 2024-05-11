import React from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Retro from './components/Cars/Retro/Retro';
import Premium from './components/Cars/Premium/Premium';
import Cabriolet from './components/Cars/Cabriolet/Cabriolet';
import Header from './components/Header/Header';
import Electro from './components/Cars/Electro/Electro';
import Jeep from './components/Cars/Jeep/Jeep';
import Sport from './components/Cars/Sport/Sport';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/retro' element={<Retro />}/>
        <Route path='/premium' element={<Premium />}/>
        <Route path='/cabriolet' element={<Cabriolet />}/>
        <Route path='/electro' element={<Electro />}/>
        <Route path='/jeep' element={<Jeep />}/>
        <Route path='/sport' element={<Sport />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;