import React from 'react';

const StepperButton = props => (
  <button
    className={'w2 ma2'}
    style={{ height: 'inherit' }}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

export default StepperButton;
