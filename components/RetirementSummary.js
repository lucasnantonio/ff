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
        <h2 className="f1-l f2-ns f3">
          <span className="normal"> Você vai se aposentar aos </span> {y} anos{' '}
          <span className="normal">com</span> R$
          {balance.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}{' '}
          <span className="normal">em conta.</span>
        </h2>
        <h3 className="f3-l f4-ns f5 normal">
          A partir daí, você pode gastar R${this.props.myRetirementIncome} por mês até o fim da
          vida.
        </h3>
      </div>
    );
  }
}

export default RetirementSummary;
