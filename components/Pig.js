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
        return <span key={id}>{message}</span>;
      }

      return null;
    });
  }

  render() {
    return (
      <div className={'pig'}>
        <p>Roinc</p>
        {this.renderInvestmentAlert('poupança')}
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
