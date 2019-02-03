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
    </TipLayout>
);

export default OptimizedCase;
