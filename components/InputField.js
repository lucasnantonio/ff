import React, { Component } from 'react';
import Input from './Input/Input';
import MinusBtn from './MinusBtn';
import PlusBtn from './PlusBtn';
import InputLabel from './InputLabel';
import InputFieldWrapper from './InputFieldWrapper';
import PigFeedback from './PigFeedback';
import colors from './Colors';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasBeenChanged: false,
    };
  }

  handleInput = (e, floatValue) => {
    this.props.handleInput(e, floatValue);
    this.setState({
      hasBeenChanged: true,
    });
  }

  handleFocus = () => {
    if (this.props.hasTips) this.props.setFocusedInput(this.props.id);
  }

  handleIncrement = (e) => {
    const input = e.target.parentElement.parentElement.querySelectorAll('input')[0];
    input.stepUp();
    input.focus();
    this.props.handleInputButtons(e);
  }

  handleDecrement = (e) => {
    const input = e.target.parentElement.parentElement.querySelectorAll('input')[0];
    input.stepDown();
    input.focus();
    this.props.handleInputButtons(e);
  }

  render() {
    return (
      <InputFieldWrapper hiddenBorder={this.props.hiddenBorder} className="w-100">
        <div className="flex w-100">
          {this.props.label && <InputLabel id={this.props.id} label={this.props.label} />}
          <div className={'flex w-100 justify-end'}>
            {this.props.hasSteppers && (
              <button
                className="pointer flex items-center ba0 bg-transparent"
                onClick={this.handleDecrement}
              >
                <MinusBtn />
              </button>
            )}
              <Input
                id={this.props.id}
                required
                maxLength={this.props.maxLength}
                inputMode="numeric"
                pattern="[0-9]*"
                data-type={this.props.dataType}
                value={this.props.value}
                min={this.props.min}
                max={this.props.max}
                placeholder={this.props.placeholder}
                isPercentage={this.props.isPercentage}
                suffix={this.props.suffix}
                isCurrency={this.props.isCurrency}
                acceptZero={this.props.acceptZero}
                onFocus={e => this.handleFocus(e)}
                onChange={this.handleInput}
              />
            {this.props.hasSteppers && (
              <button
                className="pointer flex items-center ba0 bg-transparent"
                onClick={this.handleIncrement}
              >
                <PlusBtn />
              </button>
            )}
          </div>
        </div>
        {this.props.helperText === undefined ? null : (
          <div className="flex w-100">
            <span
              className="lh-copy f6-l f7 dib-ns mt3 measure-narrow"
              style={{ color: colors.mediumGray }}
            >
              {this.props.helperText}
            </span>
          </div>
        )}
        {this.state.hasBeenChanged && !this.props.hideFeedback && (
          <PigFeedback id={this.props.id} value={this.props.value} />
        )}
      </InputFieldWrapper>
    );
  }
}

export default InputField;
