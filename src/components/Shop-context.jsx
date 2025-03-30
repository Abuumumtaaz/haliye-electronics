import React, { createContext, useState, useEffect } from 'react';
import { Products } from '../Products';

export const ShopContext = createContext('');

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < Products.length + 1; i++) {
        cart[i] = 0;
        
    }
    return  cart;
}

export const ShopContextProvider = ({ children }) => {

    const [cartItem, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    };
 
    const contextValue = { cartItem, addToCart, removeFromCart };
    console.log(cartItem);
    return (
   <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  )
};

