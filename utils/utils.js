export function getObjectByLabel(array, label) {
  return array.filter(item => item.label === label)[0];
}

export function getResultsByLabel(array, label) {
  return array.filter(item => item[0] === label)[0];
}

export function getSelectedInvestment(myInvestments) {
  return myInvestments.filter(i => i.isSelected)[0];
}
