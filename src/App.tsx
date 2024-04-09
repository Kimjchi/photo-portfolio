import React from 'react';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './containers'
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
    <FindUs />
    <Footer />
  </div>
  );
}

export default App;
