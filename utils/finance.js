export function annualToMonthly(annualRate) {
  return ((1 + annualRate) ** (1 / 12)) - 1;
}

function NPER(rate, payment, present) {
  // NPER simplified formula. Return number of periods
  if (rate === 0) {
    return -present / payment;
  }
  return Math.log(payment / (present * rate + payment)) / Math.log(1 + rate);
}

export function getLifeEventCost(age, lifeEvents) {
  const events = lifeEvents.filter(e => parseFloat(e.age) * 12 === age);

  if (events.length === 0) return null;

  return parseFloat(events[0].cost);
}

export function getRetirementAge(iR, currentBalance, initialSavings, savingsIncrease,
  retirementIncome, currentAge, lifeExpectancy, lifeEvents = []) {
  /* all variables must be in the same time unit (montly, annual, ...) */
  let balance = currentBalance;
  let retirementAge = currentAge;
  let savings = initialSavings;
  let eventCost;

  while (true) {
    balance = (1 + iR) * balance + savings;
    eventCost = getLifeEventCost(retirementAge, lifeEvents);

    if (eventCost < balance) {
      balance -= eventCost;
    }

    const nper = NPER(iR, -retirementIncome, balance);

    if (isNaN(nper) || retirementAge + (nper > 0 ? nper : 0) >= lifeExpectancy) {
      return [retirementAge, balance];
    }

    savings *= (1 + savingsIncrease);
    retirementAge += 1;
  }
}
