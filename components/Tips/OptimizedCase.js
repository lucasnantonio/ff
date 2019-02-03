import React from 'react';
import { formatAge } from '../../utils/math';
import RetirementChart from '../RetirementChart';
import colors from '../Colors';

const OptimizedCase = ({
  studyCaseResults, retirementResults, currentRetirementAge,
}) => (
    <div style={{ backgroundColor: colors.mediumPink, minWidth: '100%' }}>
      <p>Com essas modificações, você pode atingir a liberdade financeira com:</p>
      <p>{formatAge(studyCaseResults[1].retirement.age)[0]} anos</p>
      <p>({formatAge(studyCaseResults[1].retirement.age - currentRetirementAge)[0]} anos e {formatAge(studyCaseResults[1].retirement.age - currentRetirementAge)[1]} meses)</p>
      <RetirementChart
        primaryData={studyCaseResults}
        secondaryData={retirementResults[0]}
      />
    </div>
);

export default OptimizedCase;
