import React from 'react';

const Logo = props => (
  <h1
    onClick={props.onClick}
    className={`fw8 ${props.size === 'small' ? 'f5' : 'f1'} f1 white lh-solid z-max`}
  >
    Quando <br /> vou me <br /> aposentar?
    <style jsx>
      {`
        h1 {
          transition: font-size 0.3s;
        }
      `}
    </style>
  </h1>
);

export default Logo;
