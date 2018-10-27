import React from 'react';

const Logo = props => (
  <h1
    onClick={props.onClick}
    className={`${
      props.size === 'small' ? 'f5 pointer' : 'f1-l f2'
    } white lh-solid z-max titan fw1 tl-ns tc`}
  >
    Quando <br /> vou me <br /> aposentar?
    <style jsx>
      {`
        h1 {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transition: font-size 0.3s;
        }
      `}
    </style>
  </h1>
);

export default Logo;
