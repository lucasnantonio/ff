import React from 'react';
import Input from '../Input/Input';
import TipLayout from './TipLayout';

const ChangeInvestmetTip = props => (
  <TipLayout
    text={props.text}
    actionText={props.actionText}
    currentRetirementAge={props.currentRetirementAge}
    retirementResults={props.retirementResults}
    studyCaseResults={props.studyCaseResults}
    step={props.step}
    myStep={props.myStep}
    applyTips={props.applyTips}
  >
    <div>
      {props.studyCase.myWallet.map((elem, index) => (
        <div key={index} className={'flex items-center mb2'}>
          <span className={'w-75'}>{elem.label}</span>
          <Input
            value={elem.allocation}
            id={elem.label}
            onChange={(e, floatValue) => props.handleInput(e, floatValue, props.studyCase.label)}
            suffix={'%'}
            hideFeedback
            acceptZero
          />
        </div>
      ))}
    </div>
  </TipLayout>
);

export default ChangeInvestmetTip;
