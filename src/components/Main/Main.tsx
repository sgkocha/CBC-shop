import React from 'react'
import { Routes, Route } from "react-router-dom";
import Catalog from '../../pages/Catalog';
import ComplexDelivery from '../../pages/ComplexDelivery';
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
      <Route
        path='complex'
        element={<ComplexDelivery/>} 
      />

    </Routes>
  )
}

export default Main