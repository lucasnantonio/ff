import React from 'react';
import { formatAge, toCurrency } from '../../utils/math';
import RetirementChart from '../RetirementChart';

const LeaveHeritageTip = ({
  studyCase, studyCaseResults, handleInput,
  currentRetirementAge, myInvestments, retirementResults,
}) => (
    <div>
      <p>{formatAge(studyCaseResults[1].retirement.age)[0]} anos</p>
      <p>({formatAge(studyCaseResults[1].retirement.age - currentRetirementAge)[0]} anos e {formatAge(studyCaseResults[1].retirement.age - currentRetirementAge)[1]} meses)</p>
      <p>Não sei se você reparou, mas calculamos o tempo de aposentadoria sem
      deixar nenhuma herança. Já pensou em deixar alguma herança? O tempo para
      se aposentar vai aumentar ainda mais dependendo do tipo de investimento.</p>
      <p>Valor da herança:</p>
      <p>R$ {studyCaseResults[1].timeHistory[studyCaseResults[1].timeHistory.length - 1].y.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</p>
      <input
        id={'leaveHeritage'}
        name="leaveHeritage"
        type="checkbox"
        checked={studyCase.leaveHeritage}
        onChange={(e, floatValue) => handleInput(e, floatValue, studyCase.label)}
      />
      <RetirementChart
        primaryData={studyCaseResults}
        secondaryData={retirementResults.filter((investment, index) => myInvestments[index].isSelected)[0]}
      />
    </div>
);

export default LeaveHeritageTip;
