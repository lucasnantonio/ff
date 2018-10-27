import React, { Component } from 'react';
import InputLabel from './InputLabel';
import InputFieldWrapper from './InputFieldWrapper';
import MultiSelectOption from './MultiSelectOption';

const MultiSelect = props => (
  <InputFieldWrapper
    wrap
    isShowingCalculation={props.isShowingCalculation}
    hiddenBorder={props.hiddenBorder}
  >
    <InputLabel label={props.label} />
    <div className="flex flex-row flex items-center-l mb0-ns mb3 justify-end-l justify-between w-100 mt0-ns mt4">
      {props.options.map((item, index) => (
        <MultiSelectOption
          isEnabled={props.isEnabled}
          isSelected={item.isSelected}
          index={index}
          handleClick={props.isEnabled && props.handleClick}
          label={item.label}
          key={index}
        />
      ))}
    </div>
  </InputFieldWrapper>
);

export default MultiSelect;
