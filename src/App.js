// src/App.js
import React from 'react';
import './App.css';

import { 
  Header, WhatGPT3, Features, Possibility, Blog, Footer 
} from './containers';
import { Navbar, Brand, CTA } from './components';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
