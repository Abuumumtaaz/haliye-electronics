import React, { useContext, useState } from 'react'
import { Products } from '../../Products'
import { ShopContext } from '../Shop-context'
import Trolleyright from './Trolleyright';
import Newnav from '../Newnav';





const Trolley = ({ cart, setCart }) => {
 const {price, setPrice} = useState(2);
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
         {
          cart?.map((item) => (
            <div className="new-cart" key={item.id}>
              <img src={item.image} alt="image" />
              <p>{item.descriptin}</p>
              <h2>total:£{price}</h2>
            </div>
            
          ))
         }
        
        </div>
    </div>
  </>
  )
}

export default Trolley