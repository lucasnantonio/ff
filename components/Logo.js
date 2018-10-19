import React from 'react';

const Logo = props => (
  <h1 className={`fw8 ${props.size === 'small' ? 'f5' : 'f1'} f1 white lh-solid`}>
    Quando <br /> vou me <br /> aposentar?
  </h1>
);

export default Logo;
