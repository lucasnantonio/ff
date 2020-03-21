import React, { Component } from "react";
import { formatAge } from "../utils/math";
import DonationCall from "./DonationCall";
import ShareCall from "./ShareCall";
import colors from "./Colors";

class RetirementSummary extends Component {
  state = {};

  getSelectedInvestmentIndex = array => {
    const selectedItem = array.filter(item => item.isSelected);
    return array.indexOf(selectedItem[0]);
  };

  render() {
    const { age, balance } = this.props.retirementResults[0][1].retirement;
    const [y] = formatAge(age);

    return (
      <div className="w-100 flex flex-column ml0-ns center mr4">
        <h1 className="f2-l f3 lh-solid b">
          Aos&nbsp;
          <span
            className="f2-l f3 lh-solid b"
            style={{ color: colors.darkGreen, fontFamily: "Chocolate" }}
          >
            {y} anos
          </span>
          , <br></br> você será livre financeiramente.
        </h1>
        <h3 className="black-90 f5 normal lh-copy measure-narrow center ml0-ns mv0">
          Você terá R$
          {balance.toLocaleString("pt-BR", { maximumFractionDigits: 0 })} em
          conta e poderá gastar R$
          {this.props.myRetirementIncome.toLocaleString("pt-BR", {
            maximumFractionDigits: 0
          })}{" "}
          por mês até os {this.props.myLifeExpectancy}&nbsp;anos.
        </h3>
        <p
          style={{ color: colors.mediumGray }}
          className="bt bw1 b--near-white pt3 mt3 f6 normal lh-copy measure center ml0-ns mv3"
        >
          Esse valor não considera a pensão que você receberá do INSS, que pode
          ir até R$&nbsp;5645 por mês.
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
