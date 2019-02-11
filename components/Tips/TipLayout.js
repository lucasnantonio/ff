import React from 'react';
import { Spring } from 'react-spring';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { formatAge } from '../../utils/math';
import RetirementChart from '../RetirementChart';

const TipLayout = (props) => {
  const [deltaAge, deltaMonths] = formatAge(
    props.studyCaseResults[1].retirement.age - props.currentRetirementAge,
  );

  const newAge = formatAge(props.studyCaseResults[1].retirement.age)[0];

  return (
  <div
    className={'relative flex flex-wrap ba h-100 mh3 pa3'}
    style={{ minWidth: '100%' }}
  >

    {/* <CSSTransitionGroup
      transitionName={'stamp'}
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={1000}
    >
      {(props.step === props.myStep && props.applyTips) && (
        <div
          className={'ba bw2 absolute flex items-center top-0 bottom-0 left-0 right-0'}
        >
          <h1 className={'w-100 tc f1'}>APLICADO</h1>
        </div>
      )}
      <style jsx>{`
        .stamp-enter {
          opacity: 0;
        }

        .stamp-enter.stamp-enter-active {
          transition: all ${1000}ms ease-in-out;
          opacity: 1;
        }
      `}
      </style>
    </CSSTransitionGroup> */}


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
