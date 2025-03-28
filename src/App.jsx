import Cards from "./components/Cards"
import Header from "./components/Header"

import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Newnav from "./components/Newnav"
import React, { useState } from 'react';
import Footer from "./components/Pages/Footer"
import { ShopContextProvider } from "./components/Shop-context"

function App() {
  const {isActive, setIsActive} =  useState(false);

  const togglee = () => {
    setIsActive(!isActive);
  }
  return (
    <>
    
  <ShopContextProvider>    <Newnav />
   
    <Hero />
   

    <Cards />
    <Footer />
    </ShopContextProvider>

  
    </>
  )
}

export default App
