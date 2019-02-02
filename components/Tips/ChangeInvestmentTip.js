import React from 'react';
import InputField from '../InputField';
import TipLayout from './TipLayout';

const ChangeInvestmetTip = props => (
  <TipLayout
    text={props.text}
    actionText={props.actionText}
    currentRetirementAge={props.currentRetirementAge}
    retirementResults={props.retirementResults}
    studyCaseResults={props.studyCaseResults}
  >
    <div>
      {props.studyCase.myWallet.map((elem, index) => (
        <InputField
          key={index}
          dataType="rate"
          value={elem.allocation}
          id={elem.label}
          label={elem.label}
          handleInput={(e, floatValue) => props.handleInput(e, floatValue, props.studyCase.label)}
          suffix={'%'}
          hideFeedback
          acceptZero
        />
      ))}
    </div>
  </TipLayout>
);

export default ChangeInvestmetTip;
