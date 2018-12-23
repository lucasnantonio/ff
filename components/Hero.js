import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import PigAnimated from './PigAnimated';

const Hero = props => (
  <div id="hero" className="vh-100 bg-blue pa0-l ph5">
    <div className="mw7-ns center flex flex-row-ns flex-column items-center justify-center h-100 pb0-ns pb5">
      <div className="w-40-ns w-100 tl-ns tc">
        <h1 className="f1-ns f2 white lh-solid normal tracked-tight mt0">
          Descubra quando você vai se aposentar.
        </h1>
        <CSSTransitionGroup
          transitionName="exit"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {!props.isShowingQuestions && (
            <button
              style={{ backgroundColor: '#fd719b' }}
              onClick={props.startApp}
              className="ba0 mt4 ph5 pv4 white br1-ns pointer f3-ns f4 b relative-ns fixed bottom-0 r0 l0 w-auto-ns w-100"
            >
              Começar
            </button>
          )}
        </CSSTransitionGroup>
      </div>
      <div className="w-60-ns w-100">
        <PigAnimated />
      </div>
    </div>
    <style jsx>
      {`
         {
          .exit-active {
            opacity: 1;
            transform: translateY(0%);
          }
          .exit-leave {
            opacity: 0;
            transition: all 0.2s;
            transform: translateY(-20%);
          }
        }
      `}
    </style>
  </div>
);

export default Hero;
