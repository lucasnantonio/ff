import React, { Component } from 'react';
import IntlCurrencyInput from 'react-intl-currency-input';
import MinusBtn from './MinusBtn';
import PlusBtn from './PlusBtn';
import InputLabel from './InputLabel'
import InputFieldWrapper from './InputFieldWrapper'

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
      isFocused: false,
      isEmpty: true,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleInput(e, floatValue, maskedValue) {
    this.props.handleInput(e, floatValue, maskedValue);
  }

  handleFocus() {
    this.setState({
      isFocused: true,
    });
  }

  handleIncrement(e) {
    const input = e.target.parentElement.parentElement.querySelectorAll('input')[0];
    input.stepUp();
    input.focus();
    this.handleInput(e);
  }

  handleDecrement(e) {
    const input = e.target.parentElement.parentElement.querySelectorAll('input')[0];
    input.stepDown();
    input.focus();
    this.handleInput(e);
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
  }

  render() {
    return (
            <InputFieldWrapper
              isShowingCalculation={this.props.isShowingCalculation}
            >
                    <InputLabel label={this.props.label}/>
                    <div className={'flex items-center'}>
                        {this.props.hasSteppers
                            && <div className="pointer flex items-center" onClick={this.handleDecrement}>
                            <MinusBtn />
                            </div>
                        }
                        <div className={'bn w-100 flex flex-column justify-center pv2 h2'}>
                       {this.props.isCurrency === 'false'
                         ? <input
                            value={this.props.value}
                            className="bn w-100 bg-transparent f4 tc"
                            min={this.props.min}
                            max={this.props.max}
                            onFocus= {this.handleFocus}
                            onBlur= {this.handleBlur}
                            id={this.props.id}
                            type="number"
                            placeholder={this.props.placeholder}
                            onChange={this.handleInput} >
                        </input>
                         : <IntlCurrencyInput
                            className="bn w-100 bg-transparent f4 tr"
                            value={this.props.value}
                            min={this.props.min}
                            max={this.props.max}
                            onFocus= {this.handleFocus}
                            onBlur= {this.handleBlur}
                            id={this.props.id}
                            currency="BRL"
                            config={currencyConfig}
                            onChange={this.handleInput} />
                        }
                        </div>
                        {this.props.hasSteppers
                             && <div className="pointer flex items-center" onClick={this.handleIncrement}>
                             <PlusBtn />
                             </div>
                        }
                    </div>
                <style jsx>{`
                    input{outline:none}
                    .checkmark{
                        transition: all .2s;
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
