
import React, { useState } from 'react';


import ShopingPage from "./components/Pages/ShopingPage";
import Cart from './components/Pages/Cart';
import Nav from './components/Nav';
import Footer from './components/Pages/Footer';

function App() {

  const [cart, setCart] = useState([]);
  const [show, setShow ] = useState(true);


  return (
    <>
    


     
   
     <Nav setShow={setShow}  size={cart.length} />
    
     { show ?  <ShopingPage  cart={cart} setCart={setCart} /> : <Cart cart={cart} setCart={setCart}/>  }
   
    <Footer />
   
    

  
    </>
  )
}

export default App
