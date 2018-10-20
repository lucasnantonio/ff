import React, { Component } from 'react';

class Pig extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  poupancaAlert() {
    const { myInvestments } = this.props;
    const { rate } = myInvestments.find(investment => investment.label === 'poupança');

    if (rate > 3) {
      return (
        <span>Caraio, me fala que poupança é essa que eu também vou colocar
        meu dinheiro lá. O retorno médio real da poupança de 01/2000 até hoje foi
        de apenas 1.5% a.a.</span>
      );
    }

    return null;
  }

  render() {
    return (
      <div>
        {this.poupancaAlert()}
      </div>
    );
  }
}

export default Pig;
