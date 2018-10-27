import React from 'react';

const InputFieldWrapper = props => (
  <div
    className={`flex justify-between items-center pv4 ${props.wrap && 'flex-row-ns flex-column'}
    ${!props.hiddenBorder === true && 'bb b--near-white '}`}
  >
    {props.children}
  </div>
);

export default InputFieldWrapper;
