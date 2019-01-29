import React from 'react';
import { formatAge } from '../../utils/math';
import InputField from '../InputField';
import RetirementChart from '../RetirementChart';

const GeneralInputTip = ({
  id, label, text, studyCase, studyCaseResults, handleInput,
  currentRetirementAge, retirementResults, isCurrency,
}) => (
    <div className={'flex'}>
      <div className={'w-50'}>
        <p>{text}</p>
        <p>{formatAge(studyCaseResults[1].retirement.age)[0]} anos</p>
        <p>({formatAge(studyCaseResults[1].retirement.age - currentRetirementAge)[0]} anos e {formatAge(studyCaseResults[1].retirement.age - currentRetirementAge)[1]} meses)</p>
        <InputField
          isCurrency={isCurrency}
          label={label}
          placeholder={studyCase[id]}
          value={studyCase[id]}
          id={id}
          handleInput={(e, floatValue) => handleInput(e, floatValue, studyCase.label)}
          acceptZero
          hideFeedback
        />
      </div>
      <div className={'w-50'}>
        <RetirementChart
          primaryData={studyCaseResults}
          secondaryData={retirementResults[0]}
        />
      </div>
    </div>
);

export default GeneralInputTip;
