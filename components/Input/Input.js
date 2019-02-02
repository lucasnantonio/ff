import React, { Component } from 'react';
import { fromCurrency, toCurrency } from '../../utils/input';

class Input extends Component {
  handleFocus(e) {
    e.target.select();
    return this.props.handleFocus;
  }

  handleChange(e) {
    const { value } = e.target;
    const floatValue = this.props.isCurrency ? fromCurrency(value) : value;
    return this.props.onChange(e, floatValue);
  }

  getColor() {
    return this.props.value === 0 && !this.props.acceptZero ? 'black-20' : 'black';
  }

  render() {
    const { value } = this.props;
    const color = this.getColor();
    return (
      <div className={'flex items-center w-100 justify-end'} style={this.props.style}>
        <input
          className={`bn pa20 br2 bg-transparent f4-ns f5 tr w-100 ${color}`}
          id={this.props.id}
          required
          maxLength={this.props.maxLength}
          inputMode="numeric"
          pattern="[0-9]*"
          data-type={this.props.dataType}
          value={this.props.isCurrency ? toCurrency(value) : value}
          placeholder={this.props.placeholder}
          min={this.props.min}
          max={this.props.max}
          type="text"
          onChange={e => this.handleChange(e)}
          onFocus={e => this.handleFocus(e)}
          autoComplete="off"
        />
        {this.props.suffix && (
          <div className={`nowrap ${color}`}>{this.props.suffix}</div>
        )}
      </div>
    );
  }
}

export default Input;
