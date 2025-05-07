import { Route, Routes } from 'react-router-dom';
import { Art } from './assets/components/Art';
import { HomeTwo } from './assets/components/HomeTwo';
import { Music } from './assets/components/Music';
import { useState, useEffect, useRef } from "react";

function App() {


  return (
    <>
       
      <Routes>
          <Route path="/" element={<HomeTwo/>} />
          <Route path="/art" element={<Art/>} />
          <Route path="/music" element={<Music/>} />
          
      </Routes>
      
    </>
  )
}

export default App
