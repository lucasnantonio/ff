import React from 'react';
import { Spring } from 'react-spring';
import { formatAge } from '../../utils/math';
import RetirementChart from '../RetirementChart';

const TipLayout = (props) => {
  const [deltaAge, deltaMonths] = formatAge(
    props.studyCaseResults[1].retirement.age - props.currentRetirementAge,
  );

  const newAge = formatAge(props.studyCaseResults[1].retirement.age)[0];

  return (
  <div className={'flex flex-wrap ba h-100 mh3'} style={{ minWidth: '100%' }}>
    <p className={'w-100'}>{props.text}</p>
    <div className={'w-50'}>
      <p>{props.actionText}</p>
      {props.children}
    </div>
    <div className={'w-50'}>
      <RetirementChart
        primaryData={props.studyCaseResults}
        secondaryData={props.retirementResults[0]}
      />
    </div>
    <Spring
      from={{ number: 0 }}
      to={{ number: deltaAge }}
      config={{ delay: 400, precision: 0 }}

      >
      {props => <div className={'f2 w-100'}>{props.number.toFixed(0)} anos</div>}
    </Spring>
  </div>
  );
};

export default TipLayout;
