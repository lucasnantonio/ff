import React, { Component } from 'react';
import IntlCurrencyInput from 'react-intl-currency-input';
// import CurrencyInput from 'react-currency-input';
import MinusBtn from './MinusBtn';
import PlusBtn from './PlusBtn';
import InputLabel from './InputLabel';
import InputFieldWrapper from './InputFieldWrapper';

const currencyConfig = {
  locale: 'pt-BR',
  formats: {
    number: {
      BRL: {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
};

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      isFocused: false,
      isEmpty: true,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleInput(e, floatValue) {
    this.props.handleInput(e, floatValue);
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  handleFocus() {
    this.setState({
      isFocused: true,
    });
    if (this.props.hasTips) this.props.setFocusedInput(this.props.id);
  }

  handleIncrement(e) {
    const input = e.target.parentElement.parentElement.querySelectorAll('input')[0];
    input.stepUp();
    input.focus();
    this.props.handleInputButtons(e);
  }

  handleDecrement(e) {
    const input = e.target.parentElement.parentElement.querySelectorAll('input')[0];
    input.stepDown();
    input.focus();
    this.props.handleInputButtons(e);
  }

  handleBlur(e) {
    if (e.target.value.length !== 0) {
      this.setState({
        isEmpty: false,
        isFocused: true,
      });
    } else {
      this.setState({
        isFocused: false,
        isEmpty: true,
      });
    }
    if (this.props.hasTips) this.props.setFocusedInput('');
  }

  render() {
    return (
      <InputFieldWrapper hiddenBorder={this.props.hiddenBorder} className="w-100">
        <InputLabel id={this.props.id} label={this.props.label} />
        <div className={'flex items-center'}>
          {this.props.hasSteppers && (
            <button
              className="pointer flex items-center ba0 bg-transparent"
              onClick={this.handleDecrement}
            >
              <MinusBtn />
            </button>
          )}
          <div className={'bn flex flex-column justify-center pv2'}>
            {!this.props.isCurrency ? (
              <div className="flex items-center">
                <input
                  data-type={this.props.dataType}
                  value={this.props.value}
                  className={`bn bg-transparent f4-ns f5 
                    ${this.props.isPercentage ? 'tr' : 'tc'}
                    ${this.props.hasSteppers ? 'w3 mh3-l' : 'w-100'}
                    `}
                  min={this.props.min}
                  max={this.props.max}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  id={this.props.id}
                  type="number"
                  placeholder={this.props.placeholder}
                  onChange={this.handleInput}
                />
                {this.props.isPercentage && <div className="nowrap">% ao ano</div>}
              </div>
            ) : (
              <IntlCurrencyInput
                className={`${
                  this.props.value === 0 ? 'black-20' : 'black'
                } bn w-100 bg-transparent f4 tr`}
                defaultValue={this.props.placeholder}
                min={this.props.min}
                max={this.props.max}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                id={this.props.id}
                currency="BRL"
                config={currencyConfig}
                onChange={this.handleInput}
              />
            )}
          </div>
          {this.props.hasSteppers && (
            <button
              className="pointer flex items-center ba0 bg-transparent"
              onClick={this.handleIncrement}
            >
              <PlusBtn />
            </button>
          )}
        </div>
        <style jsx>{`
          input {
            outline: none;
          }
          .checkmark {
            transition: all 0.2s;
          }
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            /* display: none; <- Crashes Chrome on hover */
            -webkit-appearance: none;
            margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
          }
        `}</style>
      </InputFieldWrapper>
    );
  }
}

export default InputField;
