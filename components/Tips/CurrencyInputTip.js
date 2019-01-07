import React from 'react';
import { formatAge } from '../../utils/math';
import InputField from '../InputField';
import RetirementChart from '../RetirementChart';

const CurrencyInputTip = ({
  id, placeHolder, label, text, studyCase, studyCaseResults, handleInput,
  currentRetirementAge, myInvestments, retirementResults,
}) => (
    <div>
      <p>{text}</p>
      <p>{formatAge(studyCaseResults[1].retirement.age)[0]} anos</p>
      <p>({formatAge(studyCaseResults[1].retirement.age - currentRetirementAge)[0]} anos e {formatAge(studyCaseResults[1].retirement.age - currentRetirementAge)[1]} meses)</p>
      <InputField
        isCurrency
        label={label}
        placeholder={placeHolder}
        value={studyCase[id]}
        id={id}
        handleInput={(e, floatValue) => handleInput(e, floatValue, studyCase.label)}
        acceptZero
        hideFeedback
      />
      <RetirementChart
        primaryData={studyCaseResults}
        secondaryData={retirementResults.filter((investment, index) => myInvestments[index].isSelected)[0]}
      />
    </div>
);

export default CurrencyInputTip;
