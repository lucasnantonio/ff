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
  }

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  }

  render() {
    return (<div
            onMouseLeave={this.handleMouseLeave}
            onMouseEnter={this.handleMouseEnter}
            className={`pointer f5 pv2 ph3 ml2 br-pill ${this.state.isHovered ? 'bg-near-white' : 'bg-white'}`}
            key={this.props.key}>{this.props.label}</div>);
  }
}

export default MultiSelectOption;
