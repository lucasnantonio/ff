import React from 'react';

const StepperMarks = props => (
  <div
      className={'flex items-center justify-center h3 ma2 w-100'}
      style={props.style}
    >
      {/* render steps */}
      {[...Array(props.nSteps)].map((elem, index) => (
        <div
          key={index}
          className={`
            ba br-100 hstep ma1
            ${index === props.step && 'bg-black'}
          `}
          style={{ height: '0.5rem', width: '0.5rem' }}
        />
      ))}
    </div>
);

export default StepperMarks;
