export function annualToMonthly(annualRate) {
  return (1 + annualRate) ** (1 / 12) - 1;
}

function NPER(rate, payment, present, future, type) {
  // Initialize type
  var type = (typeof type === 'undefined') ? 0 : type;

  // Initialize future value
  var future = (typeof future === 'undefined') ? 0 : future;

  // Evaluate rate and periods (TODO: replace with secure expression evaluator)
  rate = eval(rate);

  // Return number of periods
  const num = payment * (1 + rate * type) - future * rate;
  const den = (present * rate + payment * (1 + rate * type));
  return Math.log(num / den) / Math.log(1 + rate);
}

export function getLifeEvent(age, lifeEvents) {
  for (const e of lifeEvents) {
    if (parseFloat(e.age) * 12 === age) {
      return parseFloat(e.cost);
    }
  }
  return 0;
}

export function retirementAge(iR, balance, savings, retirementIncome,
  currentAge, lifeExpectancy, lifeEvents = []) {
  /* all variables must be in the same time unit (montly, annual, ...) */
  let t = 0;
  let retirementAge = currentAge;
  let eventCost = 0;

  balance += savings;
  eventCost = getLifeEvent(retirementAge, lifeEvents);
  if (eventCost < balance) {
    balance -= eventCost;
  }


  const nper = NPER(iR, -retirementIncome, balance);
  if (isNaN(nper) || retirementAge + nper >= lifeExpectancy) {
    return [retirementAge + 1, balance];
  }

  t += 1;
  retirementAge += 1;

  while (true) {
    balance = (1 + iR) * balance + savings;
    eventCost = getLifeEvent(retirementAge, lifeEvents);

    if (eventCost < balance) {
      balance -= eventCost;
    }

    const nper = NPER(iR, -retirementIncome, balance);

    if (isNaN(nper) || retirementAge + (nper > 0 ? nper : 0) >= lifeExpectancy) {
      return [retirementAge + 1, balance];
    }

    t += 1;
    retirementAge += 1;
  }

  return [null, null];
}
