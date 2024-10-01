import React, { useState } from 'react';

function Products() {
  const products = [
    {
      img: '/Detergent1.jpg',
      title: 'KERL Detergents',
      description: 'This is the first product description. It is an eco-friendly cleaning liquid.',
    },
    {
      img: '/Toilet1.jpg',
      title: 'KERL Toilet Cleaners',
      description: 'This is the second product description. It is a disinfectant for household cleaning.',
    },
    {
      img: '/Floor1.jpg',
      title: 'KERL Floor Cleaners',
      description: 'This is the third product description. It offers superior stain removal.',
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to open modal at specific image index
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to go to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  // Function to go to the previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <section id="products" className="py-16 bg-gray-100 scroll-mt-10">
      <div className="container mx-auto px-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-64 object-contain rounded-lg mb-4 cursor-pointer"
                onClick={() => openModal(index)} // Open modal on click
              />
              <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button className="bg-[#5E822F] text-white py-2 px-4 rounded hover:bg-green-600">
                View More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-10 rounded-lg relative max-w-3xl w-full">
            <button
              className="absolute top-4 right-4 text-gray-800 hover:text-black font-bold text-xl"
              onClick={closeModal}
            >
              X
            </button>
            <div className="flex items-center justify-between">
              <button onClick={goToPrevious} className="text-gray-800 font-bold text-2xl p-2">
                &#10094;
              </button>
              <img
                src={products[currentIndex].img}
                alt={products[currentIndex].title}
                className="w-full h-96 object-contain rounded-lg"
              />
              <button onClick={goToNext} className="text-gray-800 font-bold text-2xl p-2">
                &#10095;
              </button>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-2xl font-semibold">{products[currentIndex].title}</h3>
              <p className="text-gray-600">{products[currentIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;
