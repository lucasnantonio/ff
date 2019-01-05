import React, { Component } from 'react';
import { formatAge } from '../utils/math';
import DonationCall from './DonationCall';
import ShareCall from './ShareCall';
import colors from './Colors';

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
    const [y] = formatAge(age);

    return (
      <div className="w-100 flex flex-column ml0-ns center mr4">
        <h2
          className="f2-l f3 tracked-tight lh-solid white b"
          style={{ fontFamily: 'Work Sans, system-ui, sans-serif' }}
        >
          Aos {y} anos, você será livre financeiramente.
        </h2>
        <h3 className="f5-l f6 normal lh-copy white measure-narrow center ml0-ns mv0">
          Você terá R$
          {balance.toLocaleString('pt-BR', { maximumFractionDigits: 0 })} em conta e poderá gastar
          R$
          {this.props.myRetirementIncome.toLocaleString('pt-BR', { maximumFractionDigits: 0 })} por
          mês até os {this.props.myLifeExpectancy}&nbsp;anos.
        </h3>
        <p className="f7 normal lh-copy white-50 measure center ml0-ns mv2">
          Esse valor não considera a pensão que você receberá do INSS, que pode ir até R$&nbsp;5645.
        </p>
        <div className="dn flex-ns mt4">
          <DonationCall />
          <ShareCall />
        </div>
      </div>
    );
  }
}

export default RetirementSummary;
