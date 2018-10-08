import React, { Component } from 'react';
import InputField from './InputField';
import Button from './Button';

class IntroQuestion extends Component {
  state = { }

  render() {
    return (
      <div className="pa5 bg-white flex">
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
        <Button
          isEnabled
          label='começar'
          onClick={this.props.startApp}
        />
    </div>
    );
  }
}

export default IntroQuestion;
