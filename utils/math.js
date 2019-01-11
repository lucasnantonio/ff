import * as fin from './finance';
import { getObjectByLabel } from './utils';

export function toCurrency(value) {
  return (`R$ ${Number(value).toFixed(2)}`);
}

function filterIntegerAge(timeHistory, retirementAge) {
  // too many data points slows down the app.
  return timeHistory.filter(
    point => point.x === Math.floor(point.x) || point.x === retirementAge / 12,
  );
}

function getLifeEventLog(age, lifeEvents, balance) {
  const lifeEventCost = fin.getLifeEventCost(age, lifeEvents);

  if (lifeEventCost === null) return null;

  return {
    age: age / 12,
    balance,
    valid: lifeEventCost <= balance,
  };
}

function getBalanceAfterLifeEvent(age, lifeEvents, balance) {
  const lifeEventCost = fin.getLifeEventCost(age, lifeEvents);

  if (lifeEventCost > 0 && lifeEventCost < balance) {
    return balance - lifeEventCost;
  }
  return balance;
}

function getRetirementData(mIR, currentBalance, initialSavings, savingsIncrease,
  retirementIncome, currentAge, lifeExpectancy, lifeEvents, leaveHeritage) {
  /* all variables in months */
  let savings = initialSavings;
  let balance = currentBalance;
  let age = currentAge;
  const chartData = [];
  const lifeEventsLog = [];
  let retirementAge;
  let retirementBalance;

  // before retirement

  if (!leaveHeritage) {
    [retirementAge, retirementBalance] = fin.getRetirementAge(
      mIR, balance, initialSavings, savingsIncrease, retirementIncome, currentAge,
      lifeExpectancy, lifeEvents,
    );
  }

  if (!leaveHeritage) {
    while (age <= retirementAge) {
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
  } else {
    while (balance * mIR < retirementIncome && age <= lifeExpectancy) {
      balance = (1 + mIR) * balance + savings;
      chartData.push({ x: age / 12, y: balance });

      // handle life events
      const lifeEventLog = getLifeEventLog(age, lifeEvents, balance);
      if (lifeEventLog !== null) { lifeEventsLog.push(lifeEventLog); }
      balance = getBalanceAfterLifeEvent(age, lifeEvents, balance);
      chartData.push({ x: age / 12, y: balance });

      savings *= (1 + savingsIncrease);
      retirementAge = age;
      retirementBalance = balance;
      age += 1;
    }
  }

  // after retirement

  while (age <= lifeExpectancy) {
    balance = (1 + mIR) * balance - retirementIncome;
    chartData.push({ x: age / 12, y: balance });
    age += 1;
  }

  return {
    timeHistory: filterIntegerAge(chartData, retirementAge),
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
  const {
    myInvestments, lifeEvents, leaveHeritage, myWallet,
  } = state;

  const rates = Object.keys(myWallet).map(label => getObjectByLabel(myInvestments, label).rate * myWallet[label] / 100);
  const rate = rates.reduce((a, b) => a + b, 0);

  return [[
    'myRetirement', // Temp
    getRetirementData(
      fin.annualToMonthly(parseFloat(rate) / 100),
      currentBalance,
      savings,
      fin.annualToMonthly(annualSavingsIncreaseRate / 100),
      retirementIncome,
      myCurrentAge * 12,
      lifeExpectancy * 12,
      lifeEvents,
      leaveHeritage,
    ),
  ]];
}

function prioritizeTheFirst(first, second) {
  return first === undefined ? second : first;
}

function prioritizeStudyCase(studyCase, state, id, float = true) {
  const value = prioritizeTheFirst(studyCase[id], state[id]);

  if (float) {
    return parseFloat(value);
  }

  return value;
}

export function getStudyCasesResults(state) {
  if (!state.selectedInvestment && !state.useWallet && !state.studyCasesResults) return false;

  return state.studyCases.map((studyCase) => {
    const currentBalance = prioritizeStudyCase(studyCase, state, 'myCurrentBalance');
    const savings = prioritizeStudyCase(studyCase, state, 'myCurrentMonthlySavings');
    const retirementIncome = prioritizeStudyCase(studyCase, state, 'myRetirementIncome');
    const lifeExpectancy = prioritizeStudyCase(studyCase, state, 'myLifeExpectancy');
    const myCurrentAge = prioritizeStudyCase(studyCase, state, 'myCurrentAge');

    const annualSavingsIncreaseRate = prioritizeStudyCase(studyCase, state, 'annualSavingsIncreaseRate', false);
    const leaveHeritage = prioritizeStudyCase(studyCase, state, 'leaveHeritage', false);
    const myWallet = prioritizeStudyCase(studyCase, state, 'myWallet', false);
    const { lifeEvents, myInvestments } = state;
    const { label } = studyCase;

    const rates = Object.keys(myWallet).map(label => getObjectByLabel(myInvestments, label).rate * myWallet[label] / 100);
    const rate = rates.reduce((a, b) => a + b, 0);

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
        leaveHeritage,
      ),
    ];
  });
}

export function formatAge(ageInMonths) {
  const y = Math.floor(ageInMonths / 12);
  const m = Math.floor(ageInMonths - y * 12);
  return [y, m];
}
