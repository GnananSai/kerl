import React from 'react';

function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#443030] to-[#6E66AF] text-white flex items-center h-fit mt-20">
      <div className="container flex flex-col lg:flex-row justify-between items-center pl-16">
        <div className="lg:w-1/2">
          <h1 className="text-8xl font-bold">KERL</h1>
          <p className="text-4xl mt-4">NATURES ESSENCE IN EVERY DROP</p>
        </div>
        <div className="">
          <img src="Hero.png" alt="Hero" className="h-auto max-h-[1000vh] lg:max-h-[75vh] object-contain" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
