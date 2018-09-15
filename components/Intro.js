import React from 'react';
import Particles from 'react-particles-js';

const Intro = props => (
<div id="intro" className={`${props.isShowing ? 'h-100 flex flex-column' : 'h0 overflow-hidden'} w-100 justify-between center items-center bg-offwhite tc relative`}>    
<div className="flex z-max flex-column items-center justify-center w-100 h-100">
        <h1 className="b f2 lh-solid">Quero Me  <br />Aposentar</h1>
        <h2 className="f3 fw1 measure-narrow">Calcule sua independência financeira</h2>
        <h3 className="f4 measure-narrow gray mb5">Descubra quando você vai poder mandar tudo à merda!</h3>
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
            color: { value: '#edad63' },
            number: {
              value: 6,
              density: {
                enable: false,
              },
            },
            shape: {
              stroke: {
                width: 14,
                color: '#DC9840',
              },
            },
            size: {
              value: 18,
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
              speed: 5,
              direction: 'bottom',
              straight: true,
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
</div>

);

export default Intro;
