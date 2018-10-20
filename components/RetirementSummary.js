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
        <h2 className="f3 mb2">Eu vou me aposentar com</h2>
        <h3 className="mv0 f1 tracked-tight b lh-solid"> {y} anos</h3>
      </div>
    );
  }
}

export default RetirementSummary;
