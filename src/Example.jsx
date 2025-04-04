import React, { useState } from 'react';

const App = () => {
  // Step 1: Create state for cart items
  const [cart, setCart] = useState([]);

  // Step 2: Sample products array
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 },
  ];

  // Step 3: Function to add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <h1>Product List</h1>
      <div>
        {products.map((product) => (
          <div key={product.id} style={{ marginBottom: '10px' }}>
            <p>{product.name} - ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Cart</h2>
      <ul>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;
