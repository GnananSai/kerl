import React, { useState } from 'react';

const ProductPage = ({ product, onBackClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
    setQuantity(1);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="product-page">
      <div className="product-image-slider">
        <button className="prev-button" onClick={handlePreviousImage}>‹</button>
        <div className="image-container">
          <img src={product.images[currentImageIndex]} alt={product.name} />
        </div>
        <button className="next-button" onClick={handleNextImage}>›</button>
      </div>

      <div className="product-right">
        <div className="product-header">
          <button className="back-button" onClick={onBackClick}>‹</button>
          <h1 className="product-name">{product.name}</h1>
        </div>

        <div className="product-description">
          <p>{product.description}</p>
        </div>

        <div className="product-controls">
          <div className="quantity-selector">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>

          <select value={selectedSize} onChange={handleSizeChange}>
            {product.sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="product-buttons">
          <button className="add-to-cart" onClick={() => alert(`Added ${quantity} x ${selectedSize} ${product.name} to cart`)}>Add to cart</button>
          <button className="buy-now" onClick={() => alert(`Buying ${quantity} x ${selectedSize}`)}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
