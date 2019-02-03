import React, { Component } from 'react';
import StepperButton from './StepperButton';
import StepperMarks from './StepperMarks';

class StepperContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      nSteps: this.props.children.length,
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
      <div className={'flex flex-wrap items-center justify-center ph5'}>
        <StepperMarks step={step} nSteps={nSteps} />
        <StepperButton
          onClick={step === 0 ? () => this.props.handleShowTips(false) : () => this.handleStep(-1)}>
            {'<'}
        </StepperButton>
        <StepperButton
          disabled={step === nSteps - 1}
          onClick={() => this.handleStep(1)}>
            {'>'}
        </StepperButton>
        {/* Content */}
        <div className={'mw7-ns w-100 ba bw4 overflow-hidden'}>
        <div
          className={'flex w-100'}
          style={{
            // flexBasis: 0,
            // flexGrow: 1,
            transform: `translateX(${-step * 100}%)`,
            transition: 'transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955)',
          }}
        >
          {this.props.children}
        </div>
        </div>
      </div>
    );
  }
}

export default StepperContainer;
