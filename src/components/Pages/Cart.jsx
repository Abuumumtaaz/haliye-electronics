import React, { useContext, useState } from 'react'
import { Products } from '../../Products' ;
import { ShopContext } from '../Shop-context';
import { FaStar } from "react-icons/fa";

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < Products.length + 1; i++) {
        cart[i] = 0;
        
    }
    return  cart;
}
const Cart = () => {
    
        const [cartItem, setCartItem] = useState(getDefaultCart());

       
    const addToCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };
    console.log(cartItem);
    
  return (
    <div>
        <h1>List Products</h1>
        <div className="products">
            {Products.map((product, key) => (
                <div className='first' key={key}>
                    <div className="second">

                  <div>
                  <img src={product.image} alt="" />
                  <h3 >{product.description}</h3>  
                  </div>
                  <div>
                    <span className='star'><FaStar /></span>
                    <span className='star'><FaStar /></span>
                    <span className='star'><FaStar /></span>
                    <span className='star'><FaStar /></span>
                    <span className='star'><FaStar /></span>
                    <span className='number'>(790)</span>
                    
                    <p>
                        <span>£{product.price}</span>
                    </p>
                    <button onClick={() => addToCart(product.id)}>Add to cart</button>
                  </div>
                    </div>
             </div>
            )
            )}
        </div>
    </div>
  )
}

export default Cart