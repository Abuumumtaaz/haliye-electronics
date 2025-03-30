import Cards from "./components/Cards"


import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Newnav from "./components/Newnav"
import React, { useState } from 'react';
import Footer from "./components/Pages/Footer"
import { ShopContextProvider } from "./components/Shop-context"
import Cart from "./components/Pages/Cart";
import CardList from "./components/Pages/CardList";


function App() {
 const {carty, setCarty} = useState([]);
  return (
    <>
    
    <ShopContextProvider>
      <Newnav size={0} />
    <Hero />
   

    <CardList />
    <Footer />
    </ShopContextProvider>

  
    </>
  )
}

export default App
