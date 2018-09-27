import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
            <button
                className={ `
                  ${this.props.isEnabled ? 'bg-green grow pointer' : 'bg-light-gray'} 
                  ${this.props.isFullWidth ? 'w-100' : 'br-pill'}
                  ph4 pv3 h3 white b ttu  bn `}
                onClick={this.props.isEnabled ? this.props.onClick : undefined}
            >
                {this.props.label}
            </button>
    );
  }
}

export default Button;
