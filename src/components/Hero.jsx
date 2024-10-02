import React from 'react';

function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#443030] to-[#6E66AF] text-white flex items-center h-fit mt-20">
      <div className="container flex flex-col lg:flex-row justify-between items-center w-full px-0 md:pl-12">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left px-6 py-48 md:py=0 ">
          <h1 className="text-6xl md:text-6xl lg:text-8xl font-bold">KERL</h1>
          <p className="text-xl md:text-2xl lg:text-4xl mt-4">Natures's Essence in Every Drop</p>
        </div>

        {/* Image Section: Visible on large screens only, full-width alignment */}
        <div className="hidden lg:flex overflow-hidden justify-end">
          <img src="Hero.png" alt="Hero" className="h-auto max-h-[1000vh] lg:max-h-[75vh] object-contain" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
