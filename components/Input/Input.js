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

  getInputClassName() {
    const color = this.props.value === 0 && !this.props.acceptZero ? 'black-20' : 'black';
    return `bn pa20 br2 bg-transparent f4-ns f5 tr w-100 + ${color}`;
  }

  render() {
    const { value } = this.props;
    return (
      <div className={'flex items-center w-100 justify-end'}>
        <input
          className={this.getInputClassName()}
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
        />
        {this.props.isPercentage && (
          <div className="nowrap">{`% ${this.props.suffix}`}</div>
        )}
      </div>
    );
  }
}

export default Input;
