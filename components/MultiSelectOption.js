import React, { Component } from 'react';

class MultiSelectOption extends Component {
  render() {
    return (
      <div
        onClick={e => this.props.handleClick(e, this.props.index)}
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}
        className={`f7 fw3 pv3 ph3 ml2 br-pill mb0-ns mb4
                ${this.props.isSelected ? 'ba b-black' : ''}
                ${this.props.isEnabled ? 'hover-bg-near-white pointer' : 'black-30'}
                `}
      >
        {this.props.label}
      </div>
    );
  }
}

export default MultiSelectOption;
