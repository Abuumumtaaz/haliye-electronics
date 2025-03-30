import React from 'react'
import { Products } from '../../Products'
import Cart from './Cart'

const CardList = () => {
  return (
   <>
     <h1>List Products</h1>
        {Products.map((product) => (
            <Cart product={product} />
        )
        
        )}
   </>
  )
}

export default CardList