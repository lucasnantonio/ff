import React, { Component } from 'react';
import StepperButton from './StepperButton';
import StepperMarks from './StepperMarks';

class StepperContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      nSteps: this.props.children.length,
      direction: 1,
    };
  }

  handleStep(increment) {
    const nextStep = Math.max(
      Math.min(this.state.step + increment, this.state.nSteps - 1),
      0,
    );
    this.setState({ step: nextStep });
  }

  render() {
    const { step, nSteps } = this.state;
    return (
      <div
        className={'flex flex-column w-100 pv4 overflow-hidden'}
        style={{ height: 'calc(100vh - 8rem)' }}
      >
        <div
          className={'w-100 mw7 center'}
          style={{ flex: 1 }}
        >
          <div
            className={'relative flex h-100 w-100'}
            style={{
              left: `-${1 + 2 * 1 * step}rem`,
              transform: `translateX(${-step * 100}%)`,
              transition: 'transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955',
            }}
          >
            {this.props.children}
          </div>
        </div>

        <div className={'flex w-100 mw7 center'}>
          <StepperButton
            onClick={step === 0 ? () => this.props.handleShowTips(false) : () => this.handleStep(-1)}
          >
              {'<'}
          </StepperButton>
          <StepperMarks
            style={{ flex: 1 }}
            step={step}
            nSteps={nSteps}
          />
          <StepperButton
            disabled={step === nSteps - 1}
            onClick={() => this.handleStep(1)}>
              {'>'}
          </StepperButton>
        </div>
      </div>
    );
  }
}

export default StepperContainer;
