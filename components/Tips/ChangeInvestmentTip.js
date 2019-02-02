import React from 'react';
import { formatAge, toCurrency } from '../../utils/math';
import RetirementChart from '../RetirementChart';
import InputField from '../InputField';

const ChangeInvestmetTip = ({
  studyCase, studyCaseResults, handleInput, currentRetirementAge,
  retirementResults,
}) => (
    <div>
      <p>{formatAge(studyCaseResults[1].retirement.age)[0]} anos</p>
      <p>({formatAge(studyCaseResults[1].retirement.age - currentRetirementAge)[0]} anos e {formatAge(studyCaseResults[1].retirement.age - currentRetirementAge)[1]} meses)</p>
      <p>E se você diversificasse os seus investimentos?</p>

      { Object.keys(studyCase.myWallet).map((key, index) => (
          <InputField
            key={index}
            dataType="rate"
            value={studyCase.myWallet[key]}
            id={key}
            label={key}
            handleInput={(e, floatValue) => handleInput(e, floatValue, studyCase.label)}
            // setFocusedInput={this.props.setFocusedInput}
            suffix={'%'}
            hideFeedback
          />
      ))
      }

      <RetirementChart
        primaryData={studyCaseResults}
        secondaryData={retirementResults[0]}
      />
    </div>
);

export default ChangeInvestmetTip;
