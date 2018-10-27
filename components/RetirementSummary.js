import React, { Component } from 'react';
import { formatAge } from '../utils/math';

class RetirementSummary extends Component {
  state = {};

  getSelectedInvestmentIndex = (array) => {
    const selectedItem = array.filter(item => item.isSelected);
    return array.indexOf(selectedItem[0]);
  };

  render() {
    const age = this.props.retirementResults[
      this.getSelectedInvestmentIndex(this.props.myInvestments)
    ][1].retirement.age;
    const [y, m] = formatAge(age);
    return (
      <div className="w-100 center white tc">
        <p className="f3 mb2 white-80">Você vai se aposentar com</p>
        <p className="mv0 f1 lh-solid titan"> {y} anos</p>
      </div>
    );
  }
}

export default RetirementSummary;
