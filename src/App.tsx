import React from 'react';
import { AboutUs, Chef, Footer, Gallery, Header, Intro } from './containers'
import { Navbar } from './components';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Chef />
      <Intro />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
