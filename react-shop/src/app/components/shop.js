"use client";
import { useState } from 'react';
import hamburgesa from '../../images/hamburgesa.jpeg';

import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10.99, quantity: 0, fontSize: 16, description: 'This is a great product!', imageUrl: hamburgesa},
    { id: 2, name: 'Product 2', price: 19.99, quantity: 0, fontSize: 16, description: 'You will love this product!', imageUrl: hamburgesa},
    { id: 3, name: 'Product 3', price: 15.49, quantity: 0, fontSize: 16, description: 'This product is a must-have!', imageUrl: hamburgesa},
    // Add more products here
  ]);

  const [totalQuantity, setTotalQuantity] = useState(0);

  const handleTitleChange = (event, productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, name: event.target.value };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleFontSizeChange = (event, productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, fontSize: parseInt(event.target.value, 10) };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleQuantityChange = (event, productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        const newQuantity = parseInt(event.target.value, 10);
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    const total = updatedProducts.reduce((acc, product) => acc + product.quantity, 0);
    setProducts(updatedProducts);
    setTotalQuantity(total);
  };

  return (
    <div className="shop">
      <div className="total-quantity">
        <p>Total Quantity: {totalQuantity}</p>
      </div>
      {products.map((product) => (
         <div key={product.id} className="product-card">
         <img src={product.imageUrl}
          width={500}
          height={500}
          alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <input
            type="text"
            value={product.name}
            onChange={(e) => handleTitleChange(e, product.id)}
          />
          <p style={{ fontSize: `${product.fontSize}px` }}>{product.name}</p>
          <input
            type="range"
            min="10"
            max="30"
            value={product.fontSize}
            onChange={(e) => handleFontSizeChange(e, product.id)}
          />
          <label>Quantity:</label>
          <input
            type="number"
            value={product.quantity}
            onChange={(e) => handleQuantityChange(e, product.id)}
          />
          <button>Add to Cart</button>
          <button>Learn More</button>
        </div>
      ))}
    </div>
  );
};
export default Shop