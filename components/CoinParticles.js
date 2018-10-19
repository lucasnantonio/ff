import React, { Component } from 'react';
import Particles from 'react-particles-js';

const CoinParticles = () => (<Particles
    className="absolute"
        width="100vw"
        height="100vh"
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
    />);

export default CoinParticles;
