import React, { Component } from 'react';

class MultiSelectOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    return (
      <div
        onClick={e => this.props.handleClick(e, this.props.index)}
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}
        className={`pointer f7 fw3 pv2 ph3 ml2 br-pill mb0-ns mb4
                ${this.props.isSelected ? 'ba b-black' : ''}
                ${this.state.isHovered ? 'bg-near-white' : 'bg-white'}
                `}
      >
        {this.props.label}
      </div>
    );
  }
}

export default MultiSelectOption;
