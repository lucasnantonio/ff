import React from 'react';

const StepperButton = props => (
  <button
    className={'w3 h3 br-100 ba b--black'}
    style={{
      ...props.style,
      background: 'none',
    }}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

export default StepperButton;
