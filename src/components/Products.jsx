import React from 'react';

function Products() {
  const products = [
    {
      img: '/path-to-product1.png',
      description: 'Lorem ipsum dolor sit amet...',
    },
    {
      img: '/path-to-product2.png',
      description: 'Lorem ipsum dolor sit amet...',
    },
    {
      img: '/path-to-product3.png',
      description: 'Lorem ipsum dolor sit amet...',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">OUR PRODUCTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg text-gray-800">
              <img src={product.img} alt="Product" className="w-full h-40 object-cover mb-4" />
              <p>{product.description}</p>
              <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">View More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
