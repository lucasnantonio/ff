import React, { Component } from 'react';
import PigAnimated from './PigAnimated';

const Hero = () => (
  <div className="flex flex-row-ns flex-column vh-75 items-center mt0-ns mt5">
    <div className="w-100 f3-ns f5 tl-ns tc">
      <h1>Descubra quando você vai se aposentar.</h1>
    </div>
    <div className="w-100">
      <PigAnimated />
    </div>
  </div>
);

export default Hero;
