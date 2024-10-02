import React, { useState, useEffect } from 'react';

const ProductPage = ({ product, onBackClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1);
  const [quantity, setQuantity] = useState(1);

  // Set scroll position to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
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
    <div className="container mx-auto px-6 md:px-16 py-10 mt-16">
      <button
        className="text-gray-500 hover:text-gray-700 text-lg md:text-2xl font-semibold mb-6"
        onClick={onBackClick}
      >
        ‹ Back
      </button>
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Image Slider */}
        <div className="flex flex-col items-center w-full md:w-1/2">
          <div className="relative w-full">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-64 md:h-96 object-contain rounded-lg shadow-md"
            />
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
              onClick={handlePreviousImage}
            >
              ‹
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
              onClick={handleNextImage}
            >
              ›
            </button>
          </div>
          <div className="flex space-x-2 mt-4 overflow-x-auto">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.name}
                className={`w-16 h-16 object-contain rounded-lg cursor-pointer ${
                  currentImageIndex === index ? 'border-2 border-green-500' : ''
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 text-base md:text-lg">{product.description}</p>

          {/* Size Selector */}
          <div className="flex items-center space-x-4">
            <label className="text-gray-700 text-base md:text-lg">Size:</label>
            <div className="flex space-x-2">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className={`py-2 px-4 border rounded-lg ${
                    selectedSizeIndex === index
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  } hover:bg-green-400 focus:outline-none transition duration-300`}
                  onClick={() => {
                    setSelectedSizeIndex(index);
                    setQuantity(1); // Reset quantity when size changes
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="text-lg text-gray-700">
            {product.Offers[selectedSizeIndex] ? (
              <div className="flex items-center space-x-4">
                <span className="line-through text-gray-500">₹{product.Prices[selectedSizeIndex]}</span>
                <span className="text-green-600 font-semibold">Offer: ₹{product.Offers[selectedSizeIndex]}</span>
              </div>
            ) : (
              <span>Price: ₹{product.Prices[selectedSizeIndex]}</span>
            )}
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <label className="text-gray-700 text-base md:text-lg">Quantity:</label>
            <div className="flex items-center space-x-2">
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-3 rounded-lg focus:outline-none"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span className="text-xl">{quantity}</span>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-3 rounded-lg focus:outline-none"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
            <button
              className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300 flex-grow"
              onClick={() => alert(`Added ${quantity} x ${product.sizes[selectedSizeIndex]} ${product.name} to cart`)}
            >
              Add to Cart
            </button>
            <button
              className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 flex-grow"
              onClick={() => alert(`Buying ${quantity} x ${product.sizes[selectedSizeIndex]}`)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
