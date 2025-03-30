import React, { useContext, useState } from 'react'
import { Products } from '../../Products'
import { ShopContext } from '../Shop-context'
import Trolleyright from './Trolleyright';
import Newnav from '../Newnav';



const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < Products.length + 1; i++) {
      cart[i] = 0;
      
  }
  return  cart;
}

const Trolley = () => {
  const [cartItem, setCartItem] = useState(getDefaultCart());
  return (
  <>
  <div>
    <Newnav />
  </div>
    <div>
        <div className="troll">
            <h1>Your Cart Items</h1>
        </div>
        <div className="trolleyitems">
          {Products.map((product) => {
            if (cartItem[product.id] !== 1) {
               return <Trolleyright data={product} />
            }
          })}
        </div>
    </div>
  </>
  )
}

export default Trolley