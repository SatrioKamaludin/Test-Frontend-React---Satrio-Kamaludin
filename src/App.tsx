import React from 'react';
import './App.css';
import CarouselBanner from './Components/CarouselBanner';
import Category from './Components/Category';
import Product from './Components/Product';

function App() {
  return (
    <div className="App">
      <h1>Test Frontend React - Satrio Kamaludin</h1>
      <CarouselBanner />
      <br/>
      <Category />
      <br/>
      <Product />
    </div>
  );
}

export default App;
