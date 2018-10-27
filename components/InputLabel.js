import React from 'react';

const InputLabel = props => (
  <div className="flex justify-start noSelect w-100">
    <label className="mw5 lh-copy-l f5 fw3 mr4">{props.label}</label>
  </div>
);

export default InputLabel;
