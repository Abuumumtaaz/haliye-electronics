import React from 'react';
import { Products } from '../../Products';
import { FaStar } from "react-icons/fa";
import Hero from '../Hero';



const ShopingPage = ({ setCart }) => {
 
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
      };
    
  return (
    <div className='Container'>
         <Hero />
        <h1>Shop Our latest products</h1>
     
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