
import React, { useState, createContext } from 'react';


import ShopingPage from "./components/Pages/ShopingPage";
import Cart from './components/Pages/Cart';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Context from './components/Pages/Context';


export const MyContext = createContext([]);
function App() {
const [cart, setCart] = useState([]);
 

const contextValue = { cart, setCart };

  return (
    <>
    


     <Context> 
   
   <Nav  />
   <Hero />
   <Cards />
   <ShopingPage />
    <Cart />
    
   
    <Footer />
   
    </Context>

  
    </>
  )
}

export default App
