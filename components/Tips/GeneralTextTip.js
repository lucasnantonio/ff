import React from 'react';

const GeneralTextTip = props => (
    <div
      className={'relative ba br4 h-100 mh3 pa3'}
      style={{ minWidth: '100%' }}
    >
      <h1 className={'f1'}>{props.title}</h1>
      {props.children}
    </div>
);

export default GeneralTextTip;
