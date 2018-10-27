import React, { Component } from 'react';
import InputField from './InputField';

class IntroQuestion extends Component {
  state = {};

  render() {
    return (
      <div
        id="introQuestion"
        className={`${
          this.props.isShowingIntro
            ? 'ph5-ns ph4 pb5-ns pb4 pt5-l bg-white flex flex-row-ns flex-column justify-between items-center h-auto-l h-50'
            : 'h0'
        }   overflow-hidden`}
      >
        <div className="w-50-l w-100 pr5-l">
          <InputField
            hiddenBorder
            hasSteppers
            label="Quantos anos você tem?"
            id="myCurrentAge"
            isShowingCalculation={this.props.isShowingCalculation}
            value={this.props.myCurrentAge}
            placeholder="26"
            stepperIncrement="1"
            min="1"
            max="100"
            handleInput={this.props.handleInput}
            handleInputButtons={this.props.handleInputButtons}
          />
        </div>
        <button
          className="flex flex-column justify-center items-center w-auto-ns ph5-ns w-100 h3-ns mt0-ns bn pointer bg-black-80 br-pill white pv3 titan fw1 f4"
          onClick={this.props.startApp}
        >
          Começar
        </button>
      </div>
    );
  }
}

export default IntroQuestion;
