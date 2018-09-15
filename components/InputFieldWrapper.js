import React from 'react';

const InputFieldWrapper = props => (
    <div className={`flex justify-between pv4 ${!props.hiddenBorder === true && 'bb b--near-white'} ${!props.isShowingCalculation && 'h-100'}`}>
        {props.children}
    </div>
);

export default InputFieldWrapper;
