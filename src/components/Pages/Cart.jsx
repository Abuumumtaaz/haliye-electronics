import React, { useContext, useState } from 'react'
import { Products } from '../../Products' ;
import { ShopContext } from '../Shop-context';
import { FaStar } from "react-icons/fa";
import Trolley from './Trolley';



const Cart = ({ products, handleClick }) => {
   
   const { id, image, name, description, price } = products;
    
     
  return (
    <>    <div>
      
        <div className="products">
           
                <div className='first' key={id}>
                    <div className="second">

                  <div>
                  <img src={image} alt="" />
                  <h3 >{description}</h3>  
                  </div>
                  <div>
                    <span className='star'><FaStar /></span>
                    <span className='star'><FaStar /></span>
                    <span className='star'><FaStar /></span>
                    <span className='star'><FaStar /></span>
                    <span className='star'><FaStar /></span>
                    <span className='number'>(790)</span>
                    
                    <p>
                        <span>£{price}</span>
                    </p>
                    <button onClick={() => handleClick(products)}>Add to cart</button>
                  </div>
                    </div>
             </div>
            
        </div>
    </div>
   
    </>

  )
}

export default Cart