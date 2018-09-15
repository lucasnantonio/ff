import React from 'react';

const InputFieldWrapper = props => (
    <div className="flex flex-column h-100 justify-center bb b--near-white h5 pv5">
    <div className={'flex justify-between f4 o-100'}>
        {props.children}
    </div>
    </div>
);

export default InputFieldWrapper;
