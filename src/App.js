import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Aboutus from './components/Aboutus';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Aboutus/>
      <Products />
      <Footer />
    </div>
  );
}

export default App;
