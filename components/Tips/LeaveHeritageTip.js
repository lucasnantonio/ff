import React from 'react';
import TipLayout from './TipLayout';

const LeaveHeritageTip = props => (
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
    <input
      id={'leaveHeritage'}
      name="leaveHeritage"
      type="checkbox"
      checked={props.studyCase.leaveHeritage}
      onChange={(e, floatValue) => props.handleInput(e, floatValue, props.studyCase.label)}
      />
      <p>Valor da herança:</p>
      <p>R$ {props.studyCaseResults[1].timeHistory[props.studyCaseResults[1].timeHistory.length - 1].y.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</p>
  </TipLayout>
);

export default LeaveHeritageTip;
