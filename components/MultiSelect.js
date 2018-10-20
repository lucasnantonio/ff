import React, { Component } from 'react';
import InputLabel from './InputLabel';
import InputFieldWrapper from './InputFieldWrapper';
import MultiSelectOption from './MultiSelectOption';

const MultiSelect = props => (
  <InputFieldWrapper
    isShowingCalculation={props.isShowingCalculation}
    hiddenBorder={props.hiddenBorder}
  >
    <InputLabel label={props.label} />
    <div className="flex flex-row-ns flex-column items-center mb0-ns mb3">
      {props.options.map((item, index) => (
        <MultiSelectOption
          isSelected={item.isSelected}
          index={index}
          handleClick={props.handleClick}
          label={item.label}
          key={index}
        />
      ))}
    </div>
  </InputFieldWrapper>
);

export default MultiSelect;
