export function getObjectByLabel(array, label) {
  return array.filter(item => item.label === label)[0];
}

export function getResultsByLabel(array, label) {
  return array.filter(item => item[0] === label)[0];
}
