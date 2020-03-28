import React from "react";

const InputLabel = props => (
  <div className="flex justify-start w-100">
    <label
      htmlFor={props.id}
      className="mw5 lh-copy-l f4-ns f5 fw3 mr4 black-80"
    >
      {props.label}
    </label>
  </div>
);

export default InputLabel;
