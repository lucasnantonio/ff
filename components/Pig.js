import React, { Component } from 'react';

class Pig extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  poupancaAlert() {
    const { focusedInput, myInvestments } = this.props;
    const { label, rate } = myInvestments.find(investment => investment.label === 'poupança');

    if (label !== focusedInput) return null;

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
      <div className={'pig'}>
        <p>Roinc</p>
        {this.poupancaAlert()}
        <style jsx>
          {`
            .pig {
              position: fixed;
              bottom: 24px;
              right: 24px;
              padding: 24px;
              background-color: #F8BBD0;
              border: 1px solid black;
              border-radius: 50px;
              max-width: 300px;
              min-width: 100px;
              min-height: 100px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Pig;
