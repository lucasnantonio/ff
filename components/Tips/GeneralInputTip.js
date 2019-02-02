import React from 'react';
import { formatAge } from '../../utils/math';
import Input from '../Input/Input';
import RetirementChart from '../RetirementChart';

const GeneralInputTip = ({
  id, text, actionText, studyCase, studyCaseResults, handleInput,
  currentRetirementAge, retirementResults, isCurrency,
}) => (
    <div className={'flex'}>
      <div className={'w-50'}>
        <p>{text}</p>
        <p>{actionText}</p>
        <Input
          isCurrency={isCurrency}
          placeholder={studyCase[id]}
          value={studyCase[id]}
          id={id}
          onChange={(e, floatValue) => handleInput(e, floatValue, studyCase.label)}
          acceptZero
          hideFeedback
          />
        <p>{formatAge(studyCaseResults[1].retirement.age)[0]} anos</p>
        <p>({formatAge(studyCaseResults[1].retirement.age - currentRetirementAge)[0]} anos e {formatAge(studyCaseResults[1].retirement.age - currentRetirementAge)[1]} meses)</p>
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
