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
      <div className={'flex items-center justify-center pa5'}>
        <StepperButton
          disabled={step === 0}
          onClick={() => this.handleStep(-1)}>
            {'<'}
        </StepperButton>
        <div className={'flex flex-wrap mw7-ns w-100 ba pa4'} style={{ flexBasis: 0, flexGrow: 1 }}>
          <StepperMarks style={{ width: '100%' }} step={step} nSteps={nSteps} />
          <div className={'w-100'}>
            {this.props.children[step]}
          </div>
        </div>
        <StepperButton
          disabled={step === nSteps - 1}
          onClick={() => this.handleStep(1)}>
            {'>'}
        </StepperButton>
      </div>
    );
  }
}

export default StepperContainer;
