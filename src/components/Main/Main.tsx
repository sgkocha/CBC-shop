import React from 'react'
import { Routes, Route } from "react-router-dom";
import Audit from '../../pages/Audit';
import Catalog from '../../pages/Catalog';
import Commissioning from '../../pages/Commissioning';
import ComplexDelivery from '../../pages/ComplexDelivery';
import Home from "../../pages/Home";
import Service from '../../pages/Service';
import Tenders from '../../pages/Tenders';



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
      <Route
        path='audit'
        element={<Audit/>}
      />
      <Route
        path='tenders'
        element={<Tenders/>}
      />
    

    </Routes>
  )
}

export default Main