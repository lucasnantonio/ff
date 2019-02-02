import React from 'react';
import { formatAge } from '../../utils/math';
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

      {studyCase.myWallet.map((elem, index) => (
        <InputField
          key={index}
          dataType="rate"
          value={elem.allocation}
          id={elem.label}
          label={elem.label}
          handleInput={(e, floatValue) => handleInput(e, floatValue, studyCase.label)}
          suffix={' %'}
          hideFeedback
          acceptZero
        />
      ))}

      <RetirementChart
        primaryData={studyCaseResults}
        secondaryData={retirementResults[0]}
      />
    </div>
);

export default ChangeInvestmetTip;
