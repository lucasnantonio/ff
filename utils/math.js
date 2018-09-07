export function toCurrency (value) {
    return ("R$ " + Number(value).toFixed(2))
}

export function getMyRetirementAge (state) {
  const aIR = parseFloat(state.myAnnualInterestRate)
  const mIR = annualToMonthly(aIR)
  const balance = parseFloat(state.myCurrentBalance)
  const savings = parseFloat(state.myCurrentMonthlySavings)
  const retirementIncome = parseFloat(state.myRetirementIncome)
  const lifeExpectancy = parseFloat(state.myLifeExpectancy)
  const myCurrentAge = parseFloat(state.myCurrentAge)

  const chartData = getRetirementChart (mIR, balance, savings, retirementIncome,
    myCurrentAge * 12, lifeExpectancy * 12)

  console.log(chartData);

  return getRetirementAge (mIR, balance, savings, retirementIncome,
    myCurrentAge * 12, lifeExpectancy * 12) / 12
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

export function getRetirementAge (mIR, balance, savings, retirementIncome,
  currentAge, lifeExpectancy) {
  /* all variables in months */

  let retirementAge = currentAge
  balance += savings
  let m = 1

  while (true) {
    balance = (1 + mIR) * balance + savings
    const nper = NPER(mIR, -retirementIncome, balance)

    if (isNaN(nper) || retirementAge + nper > lifeExpectancy) {
      return retirementAge
    }

    m += 1
    retirementAge += 1
  }

  return null
}

export function getRetirementChart (mIR, balance, savings, retirementIncome,
  currentAge, lifeExpectancy) {
  /* all variables in months */
  let chartData = []
  let age = currentAge
  let m = 0

  const retirementAge = getRetirementAge (mIR, balance, savings,
    retirementIncome, currentAge, lifeExpectancy)

    chartData.push({x: m, y: balance})

  age += 1
  m += 1

  balance += savings

  while (age < retirementAge) {
    balance = (1 + mIR) * balance + savings

    chartData.push({x: m, y: balance})

    age += 1
    m += 1
  }

  return chartData
}
