import React from 'react';

const InputLabel = props => (
    <div className="flex justify-start self-center noSelect">
        <label className="gray mw5 lh-copy">{props.label}</label>
    </div>);

export default InputLabel;
