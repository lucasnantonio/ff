import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import PigAnimated from './PigAnimated';
import colors from './Colors';

const Hero = props => (
  <div id="hero" style={{ backgroundColor: colors.lightPink }} className="vh-100 pa0-l ph4">
    <div className="mw7-ns center flex flex-row-ns flex-column items-center justify-center h-100 pb0-ns pb5 pt5">
      <div className="w-40-ns w-100 tl-ns tc mb5-ns">
        <h1
          style={{ color: colors.darkGreen, fontFamily: 'Montserrat, sans-serif' }}
          className="f2-ns f3 lh-solid normal mt0 b tracked-tight"
        >
          Descubra quando você vai se aposentar.
        </h1>
        <p className="measure-narrow lh-copy o-50" style={{ color: colors.darkBrown }}>
          Planejar sua independência financeira nunca foi tão fácil.
        </p>
        <CSSTransitionGroup
          transitionName="exit"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {!props.isShowingQuestions && (
            <button
              style={{
                backgroundColor: colors.darkGreen,
                fontFamily: 'Montserrat, system-ui, sans-serif',
              }}
              onClick={props.startApp}
              className="ba0 mt4 ph4 pv3-ns pv4 white br-pill-ns pointer f4 relative-ns fixed bottom-0 r0 l0 w-auto-ns w-100 b"
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
