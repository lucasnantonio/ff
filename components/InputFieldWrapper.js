import React from 'react';

const InputFieldWrapper = props => (
    <div className={`flex h-100 justify-between h5 pv4 ${!props.hiddenBorder === true && 'bb b--near-white'}`}>
        {props.children}
    </div>
);

export default InputFieldWrapper;
