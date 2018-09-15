import React, { Component } from 'react';
import InputLabel from './InputLabel';
import InputFieldWrapper from './InputFieldWrapper';
import MultiSelectOption from './MultiSelectOption';

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
  }

  handleHover = () => {
    this.setState({ isHovered: true });
  }

  render() {
    return (
        <InputFieldWrapper>
            <InputLabel label={this.props.label} />
            <div className="flex items-center">
            {this.props.options.map((item, index) => < MultiSelectOption label={item.label} key={index}/>)}
            </div>
        </InputFieldWrapper>
    );
  }
}

export default MultiSelect;
