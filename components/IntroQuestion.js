import React, { Component } from 'react';
import InputField from './InputField';
import Button from './Button';

class IntroQuestion extends Component {
  state = {};

  render() {
    return (
      <div
        className={`${
          this.props.isShowingIntro
            ? 'pa5 bg-white flex-l flex-column justify-between items-center'
            : 'h0'
        }   overflow-hidden`}
      >
        <div className="w-50-l w-100 pr5">
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
