import React from 'react';
import { formatAge, toCurrency } from '../../utils/math';
import RetirementChart from '../RetirementChart';

const ChangeInvestmetTip = ({
  studyCase, studyCaseResults, handleInput,
  currentRetirementAge, myInvestments, retirementResults,
}) => (
    <div>
      <p>{formatAge(studyCaseResults[1].retirement.age)[0]} anos</p>
      <p>({formatAge(studyCaseResults[1].retirement.age - currentRetirementAge)[0]} anos e {formatAge(studyCaseResults[1].retirement.age - currentRetirementAge)[1]} meses)</p>
      <label>
        <input
          id={'selectedInvestment'}
          type="radio"
          name="selectedInvestment"
          value="poupança"
          checked={studyCase.selectedInvestment === 'poupança'}
          onChange={(e, floatValue) => handleInput(e, floatValue, studyCase.label)}
        />
          poupança
      </label>
      <label>
        <input
          id={'selectedInvestment'}
          type="radio"
          name="selectedInvestment"
          value="renda fixa"
          checked={studyCase.selectedInvestment === 'renda fixa'}
          onChange={(e, floatValue) => handleInput(e, floatValue, studyCase.label)}
        />
          renda fixa
      </label>
      <label>
        <input
          id={'selectedInvestment'}
          type="radio"
          name="selectedInvestment"
          value="renda variável"
          checked={studyCase.selectedInvestment === 'renda variável'}
          onChange={(e, floatValue) => handleInput(e, floatValue, studyCase.label)}
        />
          renda variável
      </label>
      <RetirementChart
        primaryData={studyCaseResults}
        secondaryData={retirementResults.filter((investment, index) => myInvestments[index].isSelected)[0]}
      />
    </div>
);

export default ChangeInvestmetTip;
