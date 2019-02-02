import React from 'react';
import { formatAge } from '../../utils/math';
import RetirementChart from '../RetirementChart';

const TipLayout = props => (
  <div className={'flex'}>
    <div className={'w-50'}>
      <p>{props.text}</p>
      <p>{props.actionText}</p>
      {props.children}
      <p>{formatAge(props.studyCaseResults[1].retirement.age)[0]} anos</p>
      <p>({formatAge(props.studyCaseResults[1].retirement.age - props.currentRetirementAge)[0]} anos e {formatAge(props.studyCaseResults[1].retirement.age - props.currentRetirementAge)[1]} meses)</p>
    </div>
    <div className={'w-50'}>
      <RetirementChart
        primaryData={props.studyCaseResults}
        secondaryData={props.retirementResults[0]}
      />
    </div>
  </div>
);

export default TipLayout;
