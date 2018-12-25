import React, { Component } from 'react';

class MultiSelectOption extends Component {
  render() {
    return (
      <button
        onClick={e => this.props.handleClick(e, this.props.index)}
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}
        className={`f7 pv3 ph3 ml2 br2 mb0-ns mb4 bn
                ${this.props.isSelected ? 'bg-lightest-blue' : ''}
                ${this.props.isEnabled ? 'hover-bg-near-white pointer' : 'black-30'}
                `}
      >
        {this.props.label}
      </button>
    );
  }
}

export default MultiSelectOption;
