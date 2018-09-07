export function toCurrency (value) {
    return ("R$ " + Number(value).toFixed(2))
}

export function calculateRetirementAge (state) {
  const aIR = state.myAnnualInterestRate
  const mIR = annualToMonthly(aIR)

  let balance = parseFloat(state.myCurrentBalance)
  let age = parseFloat(state.myCurrentAge)
  const savings = parseFloat(state.myCurrentMonthlySavings)
  const retirementIncome = parseFloat(state.myRetirementIncome)
  const lifeExpectancy = parseFloat(state.myLifeExpectancy)

  balance += savings
  let m = 1
  while (true) {
    balance = (1 + mIR) * balance + savings
    const nper = NPER(mIR, -retirementIncome, balance)

    if (isNaN(nper) || age + nper / 12 > lifeExpectancy) {
      return age
    }

    m += 1
    age += 1 / 12
  }

    return null
}

function annualToMonthly(annualRate) {
  return (1 + annualRate) ** (1 / 12) - 1
}

function NPER(rate, payment, present, future, type) {
  // Initialize type
  var type = (typeof type === 'undefined') ? 0 : type;

  // Initialize future value
  var future = (typeof future === 'undefined') ? 0 : future;

  // Evaluate rate and periods (TODO: replace with secure expression evaluator)
  rate = eval(rate);

  // Return number of periods
  var num = payment * (1 + rate * type) - future * rate;
  var den = (present * rate + payment * (1 + rate * type));
  return Math.log(num / den) / Math.log(1 + rate);
}
