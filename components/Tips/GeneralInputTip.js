import React from 'react';
import Input from '../Input/Input';
import TipLayout from './TipLayout';

const GeneralInputTip = props => (
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
    <Input
      isCurrency={props.isCurrency}
      placeholder={props.studyCase[props.id]}
      value={props.studyCase[props.id]}
      id={props.id}
      onChange={(e, floatValue) => props.handleInput(e, floatValue, props.studyCase.label)}
      acceptZero
      hideFeedback
      />
  </TipLayout>
);

export default GeneralInputTip;
