import React, { Component } from 'react';
import PigAnimated from './PigAnimated';

const Hero = props => (
  <div id="hero" className="flex flex-row-ns flex-column vh-100 items-center mt0-ns mv5">
    <div className="w-100 tl-ns tc">
      <h1 className="normal f1-ns f5">Descubra quando você vai se aposentar.</h1>
      <button
        onClick={props.startApp}
        className="ba0 mt4 ph5 pv4 bg-blue white br2 pointer f3 normal"
      >
        Começar
      </button>
    </div>
    <div className="w-100">
      <PigAnimated />
    </div>
  </div>
);

export default Hero;
