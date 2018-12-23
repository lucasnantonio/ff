import React, { Component } from 'react';
import { formatAge } from '../utils/math';

class RetirementSummary extends Component {
  state = {};

  getSelectedInvestmentIndex = (array) => {
    const selectedItem = array.filter(item => item.isSelected);
    return array.indexOf(selectedItem[0]);
  };

  render() {
    const { age, balance } = this.props.retirementResults[
      this.getSelectedInvestmentIndex(this.props.myInvestments)
    ][1].retirement;
    const [y, m] = formatAge(age);

    return (
      <div className="w-100">
        <h2 className="f1">
          Você vai se aposentar aos {y} anos com R$
          {balance.toLocaleString('pt-BR', { maximumFractionDigits: 0 })} em conta.
        </h2>
        <h3>A partir daí, você pode gastar R${this.props.myRetirementIncome} até o fim da vida.</h3>
      </div>
    );
  }
}

export default RetirementSummary;
