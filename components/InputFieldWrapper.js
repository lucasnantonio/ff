import React from 'react';
import colors from './Colors';

const InputFieldWrapper = props => (
  <div
    style={{ borderBottom: `${!props.hiddenBorder && `2px solid ${colors.lightGray2}`} ` }}
    className={`h-100-ns flex flex-column justify-between pv4 ${props.wrap
      && 'flex-row-ns flex-column'}`}
  >
    {props.children}
  </div>
);

export default InputFieldWrapper;
