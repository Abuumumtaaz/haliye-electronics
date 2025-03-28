import React from 'react'
import { Products } from '../../Products' ;
import { FaStar } from "react-icons/fa";

const Cart = () => {
  return (
    <div>
        <h1>List Products</h1>
        <div className="products">
            {Products.map((product, key) => (
                <div className='first'>
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
                    <button>Add to cart</button>
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