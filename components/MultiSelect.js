import React from 'react';
import InputFieldWrapper from './InputFieldWrapper';
import MultiSelectOption from './MultiSelectOption';
import PigFeedback from './PigFeedback';

const MultiSelect = props => (
  <InputFieldWrapper
    wrap
    isShowingCalculation={props.isShowingCalculation}
    hiddenBorder={props.hiddenBorder}
  >
    <div className="flex flex-column w-100">
      <div className="bn flex flex-row-ns flex-column justify-between w-100 items-center ma0 pa0">
        <legend className="mw5 lh-copy-l f4-ns f5 fw3 mr4 black-70">{props.label}</legend>
        <div className="flex flex-row-l flex-column items-center-l mb0-ns mb3 justify-end-l justify-between mt0-ns mt4 w-100 pr0-l pr4">
          {props.options.map((item, index) => (
            <MultiSelectOption
              isEnabled={props.isEnabled}
              index={index}
              handleClick={props.isEnabled && props.handleClick}
              label={item.label}
              key={index}
            />
          ))}
        </div>
      </div>
      <PigFeedback
        hasSelectedInvestment={props.hasSelectedInvestment}
        investmentOptions={props.options}
      />
    </div>
  </InputFieldWrapper>
);

export default MultiSelect;
