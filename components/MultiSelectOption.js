/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import colors from './Colors';

class MultiSelectOption extends Component {
  render() {
    return (
      <div>
        <input
          required
          form="basicquestions"
          name="myInvestment"
          disabled={!this.props.isEnabled}
          id={`radio${this.props.label}`}
          type="radio"
          value={this.props.label}
          onClick={e => this.props.handleClick(e, this.props.index)}
          onMouseLeave={this.handleMouseLeave}
          onMouseEnter={this.handleMouseEnter}
          className="o-0 absolute"
        />
        <label
          htmlFor={`radio${this.props.label}`}
          onClick={e => this.props.handleClick(e, this.props.index)}
          className={`pa3 br-pill mr2 f7 ${this.props.isEnabled ? 'pointer' : 'black-30'}`}
        >
          {this.props.label}
        </label>
        <style jsx>
          {`{
            label {
              display: inline-block;
            }
            input[type="radio"]:focus+label {
              background-color: ${colors.lightPink}
            } 
            input[type="radio"]:hover+label {
              background-color: ${colors.lightPink}
            } 
            input[type='radio']:checked+label {
              color: white;
              background-color: ${colors.redPink}
            }
          `}
        </style>
      </div>
    );
  }
}

export default MultiSelectOption;
