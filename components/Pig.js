import React, { Component } from 'react';

function getMessages(investmentLabel) {
  const messages = {
    poupança: [
      {
        lowerRate: 2,
        upperRate: 3,
        message: 'Você está otimista. O retorno médio real da poupança de 01/2000 até hoje foi de apenas 1.5% a.a.',
      },
      {
        lowerRate: 3,
        upperRate: 20,
        message: 'Caraio, me fala que poupança é essa que eu também vou colocar meu dinheiro lá. O retorno médio real da poupança de 01/2000 até hoje foi de apenas 1.5% a.a.',
      },
    ],
    'renda variável': [
      {
        lowerRate: 20,
        upperRate: 30,
        message: 'Parabéns, temos um novo Warren Buffett (ou um novo otário).',
      },

    ],
  };

  return messages[investmentLabel];
}

class Pig extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderInvestmentAlert(investmentLabel) {
    const { focusedInput, myInvestments } = this.props;
    const { label, rate } = myInvestments.find(investment => investment.label === investmentLabel);
    const messages = getMessages(investmentLabel);

    if (label !== this.props.focusedInput) return null;

    return messages.map((m, id) => {
      const { lowerRate, upperRate, message } = m;

      if (rate >= lowerRate && rate < upperRate) {
        return (
          <div className={'message'} key={id}>
          {message}
          <style jsx>
            {`
              .message {
                position: fixed;
                bottom: 70px;
                right: 70px;
                padding: 24px;
                background-color: #fff;
                border: 1px solid black;
                border-radius: 25px;
                max-width: 300px;
              }
            `}
          </style>
        </div>);
      }

      return null;
    });
  }

  render() {
    return (
      <div >
        <div className={'pig'} />
        {this.renderInvestmentAlert('poupança')}
        {this.renderInvestmentAlert('renda variável')}
        <style jsx>
          {`
            .pig {
              position: fixed;
              bottom: 24px;
              right: 24px;
              padding: 24px;
              background-color: #F8BBD0;
              border-radius: 25px;
              min-width: 50px;
              min-height: 50px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Pig;
