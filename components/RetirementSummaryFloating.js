import React, { Component } from 'react';
import { formatAge } from '../utils/math';

class RetirementSummaryFloating extends Component {
  state = {};

  scrollBackUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  };

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
      <div className="fixed w-100 pa4 bg-blue white z-max pointer" onClick={this.scrollBackUp}>
        <div className="mw7 center">
          <span className="normal "> Você vai se aposentar aos {y} anos. </span>
        </div>
      </div>
    );
  }
}

export default RetirementSummaryFloating;
