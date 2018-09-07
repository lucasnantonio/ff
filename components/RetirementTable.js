import { Component } from "react";

class RetirementTable extends Component {
  constructor(props) {
      super(props);
      this.state = {  };
  }

  formatAge(ageInMonths) {
    const y = parseInt(ageInMonths / 12)
    const m = parseInt((ageInMonths / 12) % y * 12)
    return [y, m]
  }

  render() {
    const { retirementResults } = this.props

    if (!retirementResults) {
      return null
    }

    return (
      <table>
        <thead>
          <tr>
            <td>investimento</td>
            <td>idade de aposentadoria</td>
            <td>montante para aposentar</td>
          </tr>
        </thead>
        <tbody>
          {retirementResults.map((investiment, id) => {
            const [label, results] = investiment
            const [y, m] = this.formatAge(results.retirement.age )
            return (
              <tr key={id}>
                <td>{label}</td>
                <td>{`${y} anos e ${m} meses`}</td>
                <td>{`R$ ${results.retirement.balance.toFixed(0)}`}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default RetirementTable;
