import React, { Component } from 'react';
import PigAnimated from './PigAnimated';

const Hero = () => (
  <div id="hero" className="flex flex-row-ns flex-column vh-75 items-center mt0-ns mt5">
    <div className="w-100 tl-ns tc">
      <h1 className="normal f1-ns f5">Descubra quando você vai se aposentar.</h1>
    </div>
    <div className="w-100">
      <PigAnimated />
    </div>
  </div>
);

export default Hero;
