import React, { Component } from 'react';
import InputLabel from './InputLabel';

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
            <InputLabel label={this.props.label} />
    );
  }
}

export default MultiSelect;
