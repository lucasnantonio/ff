import * as fin from './finance';

export function toCurrency(value) {
  return (`R$ ${Number(value).toFixed(2)}`);
}

function getRetirementData(mIR, currentBalance, savings, retirementIncome,
  currentAge, lifeExpectancy, lifeEvents) {
  /* all variables in months */
  const chartData = [];
  const events = [];

  let balance = currentBalance;
  let age = currentAge;
  let m = 0;
  let eventCost = 0;

  const [retirementAge, retirementBalance] = fin.retirementAge(mIR, balance, savings,
    retirementIncome, currentAge, lifeExpectancy, lifeEvents);

  balance += savings;
  chartData.push({ x: age / 12, y: balance });

  eventCost = fin.getLifeEvent(age, lifeEvents);
  if (eventCost > 0) {
    balance -= fin.getLifeEvent(age, lifeEvents);
    chartData.push({ x: age / 12, y: balance });
  }

  age += 1;
  m += 1;

  while (age < retirementAge) {
    balance = (1 + mIR) * balance + savings;
    chartData.push({ x: age / 12, y: balance });

    eventCost = fin.getLifeEvent(age, lifeEvents);
    if (eventCost > 0) {
      events.push({ age: age / 12, balance });
      balance -= fin.getLifeEvent(age, lifeEvents);
      chartData.push({ x: age / 12, y: balance });
    }

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
    events,
  };
}

export function getRetirementResults(state) {
  const { myInvestments, lifeEvents } = state;

  const currentBalance = parseFloat(state.myCurrentBalance);
  const savings = parseFloat(state.myCurrentMonthlySavings);
  const retirementIncome = parseFloat(state.myRetirementIncome);
  const lifeExpectancy = parseFloat(state.myLifeExpectancy);
  const myCurrentAge = parseFloat(state.myCurrentAge);

  return myInvestments.map((investment) => {
    const { label, rate } = investment;

    return [
      label,
      getRetirementData(
        fin.annualToMonthly(parseFloat(rate)) / 100,
        currentBalance,
        savings,
        retirementIncome,
        myCurrentAge * 12,
        lifeExpectancy * 12,
        lifeEvents,
      ),
    ];
  });
}

export function formatAge(ageInMonths) {
  const y = parseInt(ageInMonths / 12);
  const m = parseInt((ageInMonths / 12) % y * 12);
  return [y, m];
}
