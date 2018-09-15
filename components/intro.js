import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Logo from './Logo';

class Intro extends Component {
  state = { }

  shouldComponentUpdate(nextProps) {
    return (!nextProps.isShowing === this.props.isShowing); // equals() is your implementation
  }

  render() {
    return (<div id="intro" className={`${this.props.isShowing ? 'h-100 flex flex-column' : 'h0 overflow-hidden'} w-100 justify-between center items-center bg-offwhite tc relative`}>
    <div className="flex z-max flex-column items-center justify-center w-100 h-100">
            <div className="mw6 mb4">
                <Logo />
            </div>
            <h2 className="f2 fw1 measure-narrow gray">Calcule sua independência financeira</h2>
            <h3 className="f5 measure-narrow gray mb5">Descubra quando você vai poder mandar tudo à merda!</h3>
        </div>
        <Particles
        className="absolute h-100 w-100"
            params={{
              particles: {
                opacity: {
                  anim: {
                    enable: false,
                  },
                  value: 1,
                  random: false,
                },
                color: { value: '#f5c83f' },
                number: {
                  value: 1.5,
                  density: {
                    enable: true,
                  },
                },
                shape: {
                  stroke: {
                    width: 48,
                    color: '#f5d46a',
                  },
                },
                size: {
                  value: 54,
                  random: false,
                  anim: {
                    speed: 4,
                  },
                },
                line_linked: {
                  enable: false,
                },
                move: {
                //   random: true,
                  speed: 1,
                  direction: 'bottom',
                  straight: false,
                  out_mode: 'out',
                },
              },
              interactivity: {
                events: {
                  onclick: {
                    enable: true,
                    mode: 'repulse',
                  },
                },
              },
            }}
        />
        <style jsx>
            {`
            .h0{height:0}
            .bg-offwhite { background-color: #f8f4ef }
            #intro { transition: all .5s }
            
            `}
        </style>
    </div>);
  }
}

export default Intro;
