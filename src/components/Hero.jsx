import React from 'react';

function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-purple-500 to-blue-500 text-white h-screen flex items-center">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
        <div className="lg:w-1/2">
          <h1 className="text-6xl font-bold">KERL</h1>
          <p className="text-2xl mt-4">NATURES ESSENCE IN EVERY DROP</p>
        </div>
        <div className="lg:w-1/2">
          <img src="/path-to-hero-image.png" alt="Hero" className="rounded-full w-full" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
