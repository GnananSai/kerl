import React from 'react';

function About() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">ABOUT US</h2>
        <div className="flex justify-center">
          <img src="/path-to-about-image.png" alt="About" className="w-1/3" />
        </div>
        <div className="mt-4 bg-gray-200 p-8 rounded-lg">
          <p>Your about us text goes here...</p>
        </div>
      </div>
    </section>
  );
}

export default About;
