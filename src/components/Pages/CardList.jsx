import React from 'react'
import { Products } from '../../Products'
import Cart from './Cart'

const CardList = ({ handleClick, cart }) => {
  return (
   <>
     <h1>List Products</h1>
        {Products.map((products) => (
            <Cart cart={cart} products={products} key={products.id} handleClick ={handleClick }/>
        )
        
        )}
   </>
  )
}

export default CardList