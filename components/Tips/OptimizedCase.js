import React from 'react';
import TipLayout from './TipLayout';

const OptimizedCase = props => (
  <TipLayout
    text={props.text}
    actionText={props.actionText}
    currentRetirementAge={props.currentRetirementAge}
    retirementResults={props.retirementResults}
    studyCaseResults={props.studyCaseResults}
  >
    <button onClick={() => props.handleApplyTips(true)}>Aplicar</button>
    <button onClick={() => props.handleApplyTips(false)}>Ignorar dicas</button>
  </TipLayout>
);

export default OptimizedCase;
