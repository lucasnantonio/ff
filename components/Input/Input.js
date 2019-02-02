import React, { Component } from 'react';

class Input extends Component {
  handleFocus(e) {
    e.target.select();
    return this.props.handleFocus;
  }

  render() {
    return (
      <input
        className={'bn pa2 br2 bg-transparent f4-ns f5 tr w3'}
        id={this.props.id}
        required
        maxLength={this.props.maxLength}
        inputMode="numeric"
        pattern="[0-9]*"
        data-type={this.props.dataType}
        value={this.props.value}
        placeholder={this.props.placeholder}
        min={this.props.min}
        max={this.props.max}
        type="text"
        onChange={e => this.props.onChange(e)}
        onFocus={e => this.handleFocus(e)}
      />
    );
  }
}

export default Input;
