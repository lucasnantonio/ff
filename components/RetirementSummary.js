import React, { Component } from "react";
import { formatAge } from "../utils/math";
import DonationCall from "./DonationCall";
import ShareCall from "./ShareCall";
import colors from "./Colors";
import Signup from "../components/Signup";
class RetirementSummary extends Component {
  state = {};

  getSelectedInvestmentIndex = (array) => {
    const selectedItem = array.filter((item) => item.isSelected);
    return array.indexOf(selectedItem[0]);
  };

  render() {
    const { age, balance } = this.props.retirementResults[0][1].retirement;
    const [y] = formatAge(age);

    return (
      <div className="w-100 flex flex-column ml0-ns center mr4">
        <h1 className="f2-l f3 lh-solid b mb4">
          Aos&nbsp;
          <span
            className="f2-l f3 lh-solid fw9"
            style={{ color: colors.darkGreen }}
          >
            {y} anos
          </span>
          , <br></br> você será livre financeiramente.
        </h1>
        <h3 className="black-90 f5 normal lh-copy measure-narrow center ml0-ns mb4">
          Você terá&nbsp;
          <span className="chocolate">
            R${balance.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
          </span>{" "}
          em conta e poderá gastar&nbsp;
          <span className="chocolate">
            R$
            {this.props.myRetirementIncome.toLocaleString("pt-BR", {
              maximumFractionDigits: 0,
            })}{" "}
          </span>
          por mês até os {this.props.myLifeExpectancy}&nbsp;anos.
        </h3>
        <p
          style={{ color: colors.mediumGray }}
          className="bt bw1 b--near-white pt3 f6 normal lh-copy measure center ml0-ns mv3"
        >
          Esse valor não considera a pensão que você receberá do INSS, que pode
          ir até R$&nbsp;5645 por mês.
        </p>
        <div className="dn flex-ns mt4">
          <div className="pt3 pb4 bw1 b--black-10 bg-lightest-blue pa4 br4">
            <h3 className="b chocolate">Aposentar.me 2.0 está vindo aí!</h3>
            <p className="mb4">Inscreva-se para ficar sabendo do lançamento.</p>
            <Signup />
          </div>
        </div>
      </div>
    );
  }
}

export default RetirementSummary;
