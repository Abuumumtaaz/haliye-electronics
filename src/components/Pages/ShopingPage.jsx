import React, { useState } from 'react';
import { Products } from '../../Products';
import { FaStar } from "react-icons/fa";
import Hero from '../Hero';



const ShopingPage = ({ cart, setCart }) => {
  const [ warning, setWarning] = useState(false);
 
    const addToCart = (product) => {

      let isPresent = false;

      cart.forEach((item) => {
        if(product.id === item.id)
          isPresent = true;

      })
      if(isPresent){
        setWarning(true);
        setTimeout(()=>{
          setWarning(false)
        }, 2000);
        return;
      }
       
        setCart((prevCart) => [...prevCart, product]);
      };
    
  return (
    <div className='Container'>
         <Hero />
        <h1>Shop Our latest products</h1>
      { warning &&   <div className=" warning">You already but in the cart</div>
     }
    <div className='cards'>
        {Products.map((product) => (
          
          <div key={product.id} className='card-item '>
         
            <div>
            <img src={product.image} alt="Alxdulilaah " />
          
          
          <div className='price-area'>
               <span className='star'><FaStar /></span>
               <span className='star'><FaStar /></span>
               <span className='star'><FaStar /></span>
               <span className='star'><FaStar /></span>
               <span className='star'><FaStar /></span>
               <span className='number'>(790)</span>
               
               <p>
                   <span>£{product.price}</span>
               </p>
               <button onClick={() => addToCart(product)}>Add to Cart</button>
             </div>
              
</div>
            </div>
            
        ))}
      </div>
    </div>
  )
}

export default ShopingPage