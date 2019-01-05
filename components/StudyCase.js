import React from 'react';
import InputField from './InputField';
import { formatAge } from '../utils/math';

const StudyCase = ({
  id, placeHolder, label, studyCase, studyCaseResults, handleInput,
}) => (
    <div>
      <p>{formatAge(studyCaseResults[1].retirement.age)[0]} anos</p>
      <InputField
        isCurrency
        label={label}
        placeholder={placeHolder}
        value={studyCase[id]}
        id={id}
        handleInput={(e, floatValue) => handleInput(e, floatValue, studyCase.label)}
        acceptZero
      />
    </div>
);

export default StudyCase;
