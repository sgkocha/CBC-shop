import React from 'react'
import { Routes, Route } from "react-router-dom";
import Catalog from '../../pages/Catalog';
import Home from "../../pages/Home";
import Service from '../../pages/Service';



const Main = () => {
  return (
   <Routes>
      <Route
        path='/'
        element={<Home/>} 
      />
     <Route
        path='service'
        element={<Service/>} 
      />
      <Route
        path='catalog'
        element={<Catalog/>} 
      />
    </Routes>
  )
}

export default Main