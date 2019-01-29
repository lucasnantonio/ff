import React, { Component } from 'react';
import StepperButton from './StepperButton';

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
      <div className={'flex items-center pa4 debug'}>
        <StepperButton
          disabled={step === 0}
          onClick={() => this.handleStep(-1)}>
            VOLTAR
        </StepperButton>
        <div style={{ flexGrow: 1 }}>
          {this.props.children[step]}
        </div>
        <StepperButton
          disabled={step === nSteps - 1}
          onClick={() => this.handleStep(1)}>
            AVANÇAR
        </StepperButton>
      </div>
    );
  }
}

export default StepperContainer;
