import React from 'react'
import { Routes, Route } from "react-router-dom";
import Catalog from '../../pages/Catalog';
import Commissioning from '../../pages/Commissioning';
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
      <Route
        path='commissioning'
        element={<Commissioning/>}
      />

    </Routes>
  )
}

export default Main