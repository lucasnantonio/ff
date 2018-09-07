import * as fin from './finance'

export function toCurrency (value) {
    return ("R$ " + Number(value).toFixed(2))
}

export function getMyRetirementData (state, aIR) {
  const mIR = fin.annualToMonthly(aIR)
  const balance = parseFloat(state.myCurrentBalance)
  const savings = parseFloat(state.myCurrentMonthlySavings)
  const retirementIncome = parseFloat(state.myRetirementIncome)
  const lifeExpectancy = parseFloat(state.myLifeExpectancy)
  const myCurrentAge = parseFloat(state.myCurrentAge)

  return getRetirementData(mIR, balance, savings, retirementIncome,
    myCurrentAge * 12, lifeExpectancy * 12)
}

function getRetirementData(mIR, balance, savings, retirementIncome,
  currentAge, lifeExpectancy) {
  /* all variables in months */
  let chartData = []
  let age = currentAge
  let m = 0

  const [retirementAge, retirementBalance] = fin.retirementAge(mIR, balance, savings,
    retirementIncome, currentAge, lifeExpectancy)

    chartData.push({x: age / 12, y: balance})

  age += 1
  m += 1

  balance += savings

  while (age < retirementAge) {
    balance = (1 + mIR) * balance + savings

    chartData.push({x: age / 12, y: balance})

    age += 1
    m += 1
  }

  while (age < lifeExpectancy) {
    balance = (1 + mIR) * balance - retirementIncome

    chartData.push({x: age / 12, y: balance})

    age += 1
    m += 1
  }

  return {
    timeHistory: chartData,
    retirement: {
      age: retirementAge,
      balance: retirementBalance
    }
  }
}

export function getRetirementResults(state) {
  const { myInvestiments } = state

  return myInvestiments.map((investiment) => {
    const {label, rate} = investiment
    return [label, getMyRetirementData(state, rate)]
  })
}
