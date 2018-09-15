import React, { Component } from 'react';
import InputLabel from './InputLabel';
import InputFieldWrapper from './InputFieldWrapper';

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
        <InputFieldWrapper>
            <InputLabel label={this.props.label} />
            <div className="flex">
                {this.props.options.map((item, index) => <div 
                    className={`pointer f5 pa2 bg-near-white br-pill`} key={index}>{item.label}</div>)
                    }
            </div>
        </InputFieldWrapper>
    );
  }
}

export default MultiSelect;
