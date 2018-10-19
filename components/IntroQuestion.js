import React, { Component } from 'react';
import InputField from './InputField';
import Button from './Button';

class IntroQuestion extends Component {
  state = {};

  render() {
    return (
      <div
        className={`${
          this.props.isShowingIntro ? 'h-100 pa5 bg-white flex' : 'h0'
        }  justify-between items-center overflow-hidden`}
      >
        <div className="w-50 pr5">
          <InputField
            hasSteppers
            label="Quantos anos você tem?"
            id="myCurrentAge"
            isShowingCalculation={this.props.isShowingCalculation}
            value={this.props.myCurrentAge}
            placeholder="26"
            stepperIncrement="1"
            min="1"
            max="100"
            handleInput={this.props.handleAgeInput}
            handleInputButtons={this.props.handleInputButtons}
          />
        </div>
        <Button isEnabled label="começar" onClick={this.props.startApp} />
      </div>
    );
  }
}

export default IntroQuestion;
