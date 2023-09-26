/* eslint-disable react/prop-types */
import { useState } from "react";

export const Product = ({
  title,
  imageUrl,
  quantity,
  description,
  price,
  fontSize,
  handleChangeTotal,
}) => {
  const [titulo, setTitulo] = useState(title);
  const [cantidad, setCantidad] = useState(quantity);

  const handleTitleChange = (e) => {
    setTitulo(e.target.value);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (isNaN(newQuantity)) {
      return;
    }
    setCantidad(newQuantity);
  };
  const [cartQuantity, setCartQuantity] = useState(0);

  const handleAddToCart = () => {
    handleChangeTotal(cantidad - cartQuantity);
    setCartQuantity(cantidad);
  };
  return (
    <div className="product-card">
      <img src={imageUrl} width="500px" height="500px" alt={title} />
      <h2 style={{ fontSize: `${fontSize}px` }}>{titulo}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <input
        type="text"
        value={titulo}
        onChange={(e) => handleTitleChange(e)}
        min="0"
      />
      <label>Quantity:</label>
      <input type="number" value={cantidad} onChange={handleQuantityChange} />

      <button onClick={handleAddToCart} className="AddToCartButton">
        Add to cart
      </button>
      <button className="LearnMoreButton">Learn More</button>
    </div>
  );
};
