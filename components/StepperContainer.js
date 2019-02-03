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
      <div className={'flex items-center justify-center ph5'}>
        <StepperButton
          onClick={step === 0 ? () => this.props.handleShowTips(false) : () => this.handleStep(-1)}>
            {'<'}
        </StepperButton>
        <div className={'flex flex-wrap mw7-ns h-100 w-100 ba pa4'} style={{ flexBasis: 0, flexGrow: 1 }}>
          <div className={'w-100'}>
            {this.props.children[step]}
          </div>
          <StepperMarks style={{ width: '100%' }} step={step} nSteps={nSteps} />
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
