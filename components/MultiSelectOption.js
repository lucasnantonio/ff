import React, { Component } from 'react';

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
          className={`pa3 f7 ${this.props.isEnabled ? 'hover-bg-near-white pointer' : 'black-30'}`}
        >
          {this.props.label}
        </label>
        <style jsx>
          {`{
            label {
              display: inline-block;
            }
            input[type="radio"]:focus+label {
              background-color: #f7f7f7;
            } 
            input[type='radio']:checked+label {
              border: solid 2px black;
              color: black;
            }
          `}
        </style>
      </div>
    );
  }
}

export default MultiSelectOption;
