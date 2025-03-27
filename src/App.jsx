import Cards from "./components/Cards"
import Header from "./components/Header"

import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Newnav from "./components/Newnav"
import React, { useState } from 'react';
import Footer from "./components/Pages/Footer"

function App() {
  const {isActive, setIsActive} =  useState(false);

  const togglee = () => {
    setIsActive(!isActive);
  }
  return (
    <>
    
  
    <Newnav />
   
    <Hero />
   

    <Cards />
    <Footer />

  
    </>
  )
}

export default App
