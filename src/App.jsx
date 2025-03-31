import Cards from "./components/Cards"


import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Newnav from "./components/Newnav"
import React, { useState } from 'react';
import Footer from "./components/Pages/Footer"
import { ShopContextProvider } from "./components/Shop-context"
import Cart from "./components/Pages/Cart";
import CardList from "./components/Pages/CardList";
import Trolley from "./components/Pages/Trolley";


function App() {
 const {cart, setCart} = useState([]);
 const {show, setShow} = useState(true);
 const {warning, setWarning} = useState(false);

 const handleClick = (product) => {
  console.log(product);
  setCart([...cart, product]);

 }
  return (
    <>
    
    <ShopContextProvider>
      <Newnav setShow={setShow} />
     { show ?  <Trolley cart={cart} setCart={setCart}/> : <CardList  handleClick={handleClick}/> }

    <Footer />
    </ShopContextProvider>

  
    </>
  )
}

export default App
