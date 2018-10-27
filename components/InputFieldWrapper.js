import React from 'react';

const InputFieldWrapper = props => (
  <div
    className={`flex justify-between h-100-l pv0-l pv4 ${!props.hiddenBorder === true
      && 'bb b--near-white '}`}
  >
    {props.children}
  </div>
);

export default InputFieldWrapper;
