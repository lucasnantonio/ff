import React from 'react';
import { formatAge } from '../../utils/math';
import RetirementChart from '../RetirementChart';

const TipLayout = (props) => {
  const [deltaAge, deltaMonths] = formatAge(
    props.studyCaseResults[1].retirement.age - props.currentRetirementAge,
  );

  const newAge = formatAge(props.studyCaseResults[1].retirement.age)[0];

  return (
  <div className={'flex flex-wrap'}>
    <p className={'w-100'}>{props.text}</p>
    <div className={'w-50'}>
      <p>{props.actionText}</p>
      {props.children}
      <p>({deltaAge} anos e {deltaMonths} meses)</p>
      <p>{newAge} anos</p>
    </div>
    <div className={'w-50'}>
      <RetirementChart
        primaryData={props.studyCaseResults}
        secondaryData={props.retirementResults[0]}
      />
    </div>
  </div>
  );
};

export default TipLayout;
