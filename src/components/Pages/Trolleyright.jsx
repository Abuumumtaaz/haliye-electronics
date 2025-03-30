import React from 'react';

import { FaRegHeart } from "react-icons/fa";

const Trolleyright = (props) => {
    const { id, description, image, price } = props.data;
  return (
    <>  
      <div className='troll-all' key={id}>
      <div className='troll-two'>
      <div className="troll-image">
      <img src={image} alt="dfds" />
      </div>
      <div className="troll-description">
        <h4>{description}</h4>
        <p>456/5073</p>
       <div className="whishlist">
       <span><FaRegHeart /></span>
       <p>Add to whishlist</p>
       </div>
      </div>
     <div className="troll-price">
     <p>£{price}.00</p>
     </div>
      
      </div>
      </div>
    </>

  )
}

export default Trolleyright