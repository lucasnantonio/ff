import React from 'react';

const StepperButton = props => (
  <button className={'w4 h-100'} onClick={props.onClick} disabled={props.disabled}>
    {props.children}
  </button>
);

export default StepperButton;
