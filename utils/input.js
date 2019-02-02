export function isNumber(value, allowNegative = true) {
  /* returns true if value is a number, the empty string, or the minus sign
    if negative is allowed
  */
  return (
    (!isNaN(value) && isFinite(value))
    || (value === '' || (allowNegative && value === '-'))
  );
}

export function valueByInputType(type, floatValue, value, checked) {
  if (type === 'radio') {
    return value;
  } if (type === 'checkbox') {
    return checked;
  }
  return parseFloat(floatValue);
}

export function fromCurrency(currency) {
  const number = Number(currency.replace(/[^0-9\,-]+/g, ''));
  return number;
}

export function toCurrency(number) {
  const currency = number.toLocaleString('pt-BR', { maximumFractionDigits: 0 });
  return `R$ ${currency}`;
}
