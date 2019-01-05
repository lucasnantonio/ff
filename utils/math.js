import * as fin from './finance';

export function toCurrency(value) {
  return (`R$ ${Number(value).toFixed(2)}`);
}

function getLifeEventLog(age, lifeEvents, balance) {
  const lifeEventCost = fin.getLifeEventCost(age, lifeEvents);

  if (lifeEventCost > 0) {
    if (lifeEventCost > balance) {
      return {
        age: age / 12,
        balance,
        valid: false,
        obs: 'Dinheiro insuficiente. Evento Ignorado.',
      };
    }
    return {
      age: age / 12,
      balance,
      valid: true,
      obs: '',
    };
  }

  return null;
}

function getBalanceAfterLifeEvent(age, lifeEvents, balance) {
  const lifeEventCost = fin.getLifeEventCost(age, lifeEvents);

  if (lifeEventCost > 0 && lifeEventCost < balance) {
    return balance - lifeEventCost;
  }
  return balance;
}

function getRetirementData(mIR, currentBalance, initialSavings, savingsIncrease,
  retirementIncome, currentAge, lifeExpectancy, lifeEvents) {
  /* all variables in months */
  let savings = initialSavings;
  let balance = currentBalance;
  let age = currentAge;
  const chartData = [];
  const lifeEventsLog = [];

  // before retirement

  const [retirementAge, retirementBalance] = fin.retirementAge(
    mIR, balance, initialSavings, savingsIncrease, retirementIncome, currentAge,
    lifeExpectancy, lifeEvents,
  );

  while (age < retirementAge) {
    balance = (1 + mIR) * balance + savings;
    chartData.push({ x: age / 12, y: balance });

    // handle life events
    const lifeEventLog = getLifeEventLog(age, lifeEvents, balance);
    if (lifeEventLog !== null) { lifeEventsLog.push(lifeEventLog); }
    balance = getBalanceAfterLifeEvent(age, lifeEvents, balance);
    chartData.push({ x: age / 12, y: balance });

    savings *= (1 + savingsIncrease);
    age += 1;
  }

  // after retirement

  while (age <= lifeExpectancy) {
    balance = (1 + mIR) * balance - retirementIncome;
    chartData.push({ x: age / 12, y: balance });
    age += 1;
  }

  return {
    timeHistory: chartData,
    retirement: {
      age: retirementAge,
      balance: retirementBalance,
    },
    events: lifeEventsLog,
  };
}

export function getRetirementResults(state) {
  const currentBalance = parseFloat(state.myCurrentBalance);
  const savings = parseFloat(state.myCurrentMonthlySavings);
  const retirementIncome = parseFloat(state.myRetirementIncome);
  const lifeExpectancy = parseFloat(state.myLifeExpectancy);
  const myCurrentAge = parseFloat(state.myCurrentAge);
  const annualSavingsIncreaseRate = parseFloat(state.annualSavingsIncreaseRate);
  const { myInvestments, lifeEvents } = state;

  return myInvestments.map((investment) => {
    const { label, rate } = investment;

    return [
      label,
      getRetirementData(
        fin.annualToMonthly(parseFloat(rate) / 100),
        currentBalance,
        savings,
        fin.annualToMonthly(annualSavingsIncreaseRate / 100),
        retirementIncome,
        myCurrentAge * 12,
        lifeExpectancy * 12,
        lifeEvents,
      ),
    ];
  });
}

export function getStudyCasesResults(state) {
  return state.studyCases.map((studyCase) => {
    const currentBalance = parseFloat(studyCase.myCurrentBalance || state.myCurrentBalance);
    const savings = parseFloat(studyCase.myCurrentMonthlySavings || state.myCurrentMonthlySavings);
    const retirementIncome = parseFloat(studyCase.myRetirementIncome || state.myRetirementIncome);
    const lifeExpectancy = parseFloat(studyCase.myLifeExpectancy || state.myLifeExpectancy);
    const myCurrentAge = parseFloat(studyCase.myCurrentAge || state.myCurrentAge);
    const annualSavingsIncreaseRate = parseFloat(studyCase.annualSavingsIncreaseRate || state.annualSavingsIncreaseRate);
    const { lifeEvents } = state;
    const { label, rate } = studyCase;

    return [
      label,
      getRetirementData(
        fin.annualToMonthly(parseFloat(rate) / 100),
        currentBalance,
        savings,
        fin.annualToMonthly(annualSavingsIncreaseRate / 100),
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
