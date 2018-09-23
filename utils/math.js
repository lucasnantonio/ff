import * as fin from './finance';

export function toCurrency(value) {
  return (`R$ ${Number(value).toFixed(2)}`);
}

export function getMyRetirementData(state, aIR) {
  const mIR = fin.annualToMonthly(aIR);
  const balance = parseFloat(state.myCurrentBalance);
  const savings = parseFloat(state.myCurrentMonthlySavings);
  const retirementIncome = parseFloat(state.myRetirementIncome);
  const lifeExpectancy = parseFloat(state.myLifeExpectancy);
  const myCurrentAge = parseFloat(state.myCurrentAge);
  const lifeEvents = state.lifeEvents;

  return getRetirementData(mIR, balance, savings, retirementIncome,
    myCurrentAge * 12, lifeExpectancy * 12, lifeEvents);
}

function getRetirementData(mIR, balance, savings, retirementIncome,
  currentAge, lifeExpectancy, lifeEvents) {
  /* all variables in months */
  const chartData = [];
  let age = currentAge;
  let m = 0;

  const [retirementAge, retirementBalance] = fin.retirementAge(mIR, balance, savings,
    retirementIncome, currentAge, lifeExpectancy, lifeEvents);

  balance += savings - fin.getLifeEvent(age, lifeEvents);
  chartData.push({ x: age / 12, y: balance });

  age += 1;
  m += 1;

  while (age < retirementAge) {
    balance = (1 + mIR) * balance + savings - fin.getLifeEvent(age, lifeEvents);

    chartData.push({ x: age / 12, y: balance });

    age += 1;
    m += 1;
  }

  while (age < lifeExpectancy) {
    balance = (1 + mIR) * balance - retirementIncome;

    chartData.push({ x: age / 12, y: balance });

    age += 1;
    m += 1;
  }

  return {
    timeHistory: chartData,
    retirement: {
      age: retirementAge,
      balance: retirementBalance,
    },
  };
}

export function getRetirementResults(state) {
  const { myInvestments } = state;

  return myInvestments.map((investment) => {
    const { label, rate } = investment;
    return [label, getMyRetirementData(state, parseFloat(rate))];
  });
}

export function formatAge(ageInMonths) {
  const y = parseInt(ageInMonths / 12);
  const m = parseInt((ageInMonths / 12) % y * 12);
  return [y, m];
}
