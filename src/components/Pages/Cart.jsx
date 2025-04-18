import { useContext, React } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { MyContext } from '../../App';
import { useShare } from './Context';

const Cart = () => {
      const { cart, setCart } = useShare();

    const removeProduct = (id) => {
    
        setCart(cart.filter(item => id !== item.id ));
      };
     return (
    <div>
         <h2>Your Basket</h2>
      <ul>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
           cart.map((item) => (
                  <div className='troll-all' key={item.id}>
                  <div className='troll-two'>
                  <div className="troll-image">
                  <img src={item.image} alt="dfds" />
                  </div>
                  <div className="troll-description">
                    <h4>{item.description}</h4>
                    <p>456/5073</p>
                   <div className="whishlist">
                   <span><FaRegHeart /></span>
                   <p>Add to whishlist</p>
                   </div>
                   <a  onClick={() => removeProduct(item.id)}>Remove item </a>

                  </div>
                 <div className="troll-price">
                 <p>£{item.price}.00</p>
                 </div>
                  
                  </div>
                  </div>
                ))
        )}
      </ul>
    </div>
  )
}

export default Cart