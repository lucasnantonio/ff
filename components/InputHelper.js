import React from 'react';

const InputHelperText = () => (
    <div className={`green ${this.props.isEmpty ? 'dn' : 'flex'}`}>
        <div className={'checkmark bg-green white br-pill mr3 mt1 pa2 w1 h1 f6'}>✔</div>
        <p>{this.props.helperText}</p>
    </div>
);

export default InputHelperText;
