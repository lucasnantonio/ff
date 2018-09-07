export function isNumber(value, allowNegative = true) {
  /* returns true if value is a number, the empty string, or the minus sign
    if negative is allowed
  */
  return (
    (!isNaN(value) && isFinite(value)) ||
    (value === '' || (allowNegative && value === '-'))
  );
}
