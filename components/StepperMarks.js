import React from 'react';

const StepperMarks = ({ step, nSteps, style }) => (
  <div
      className={'flex items-center justify-center h-100 tc ml2 mr2'}
      style={style}
    >
      {/* render steps */}
      {[...Array(nSteps)].map((elem, index) => (
        <div
          key={index}
          className={`
            ba br-100 hstep ma1
            ${index === step && 'bg-black'}
          `}
          style={{ height: '0.5rem', width: '0.5rem' }}
        />
      ))}
    </div>
);

export default StepperMarks;
