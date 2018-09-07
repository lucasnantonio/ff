export function toCurrency (value) {
    return ("R$ " + Number(value).toFixed(2))
}

export function calculateRetirementAge (state) {
    return (100-state.myCurrentAge)
}
