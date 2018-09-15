import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
            <button
                className='ph4 pv3 h3 bg-green white b ttu pointer bn absolute mr6 br-pill grow'
                onClick={this.props.onClick}
            >
                {this.props.label}
            </button>
    );
  }
}

export default Button;
