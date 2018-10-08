import React, { Component } from 'react';
import InputField from './InputField';

class IntroQuestion extends Component {
  state = { }

  render() {
    return (
      <InputField
      hasSteppers
      label = "Quantos anos você tem?"
      id = "myCurrentAge"
      isShowingCalculation = {this.props.isShowingCalculation}
      isExpanded = {this.props.isExpanded}
      value = {this.props.myCurrentAge}
      placeholder="26"
      stepperIncrement = "1"
      min = "1"
      max = "100"
      handleInput = {this.props.handleAgeInput}
      handleInputButtons = {this.props.handleInputButtons}
    />
    );
  }
}

export default IntroQuestion;
