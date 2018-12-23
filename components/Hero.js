import React, { Component } from 'react';
import PigAnimated from './PigAnimated';

const Hero = props => (
  <div id="hero" className="vh-100 bg-blue">
    <div className="mw7-ns center flex flex-row-ns flex-column items-center justify-center h-100">
      <div className="w-100 tl-ns tc">
        <h1 className="f1-ns f2 white normal tracked-tight">
          Descubra quando você vai se aposentar.
        </h1>
        {!props.isShowingQuestions && (
          <button
            style={{ backgroundColor: '#fc5a6f' }}
            onClick={props.startApp}
            className="ba0 mt4 ph5 pv4 white br2-ns pointer f3 normal relative-ns fixed bottom-0 r0 l0 w-auto-ns w-100"
          >
            Começar
          </button>
        )}
      </div>
      <div className="w-100">
        <PigAnimated />
      </div>
    </div>
  </div>
);

export default Hero;
