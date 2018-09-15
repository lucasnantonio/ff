import React, { Component } from 'react';
import { formatAge } from '../utils/math';

class RetirementTable extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { retirementResults } = this.props;

    if (!retirementResults) {
      return null;
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
          {retirementResults.map((investment, id) => {
            const [label, results] = investment;
            const [y, m] = formatAge(results.retirement.age);
            return (
              <tr key={id}>
                <td>{label}</td>
                <td>{`${y} anos e ${m} meses`}</td>
                <td>{`R$ ${results.retirement.balance.toFixed(0)}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default RetirementTable;
