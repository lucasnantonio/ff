import React, { Component } from 'react';

function getMessages(label) {
  const messages = {
    poupança: [
      {
        lowerValue: 2,
        upperValue: 3,
        message: 'Você está otimista. O retorno médio real da poupança de 01/2000 até hoje foi de apenas 1.5% a.a.',
      },
      {
        lowerValue: 3,
        upperValue: 20,
        message: 'Caraio, me fala que poupança é essa que eu também vou colocar meu dinheiro lá. O retorno médio real da poupança de 01/2000 até hoje foi de apenas 1.5% a.a.',
      },
    ],
    'renda fixa': [],
    'renda variável': [
      {
        lowerValue: 20,
        upperValue: 30,
        message: 'Parabéns, temos um novo Warren Buffett (ou um novo otário).',
      },
    ],
    myCurrentMonthlySavings: [
      {
        lowerValue: 500,
        upperValue: 10000,
        message: 'Parabéns. Você está acima da média da população.',
      },
      {
        lowerValue: 10000,
        upperValue: 30000,
        message: 'Aooow chefia. Tá cheio da nota, hein?!',
      },
      {
        lowerValue: 30000,
        upperValue: Number.POSITIVE_INFINITY,
        message: 'Ah, tá de sacanagem que você poupa tudo isso por mês.',
      },
    ],
  };

  return messages[label];
}

function filterMessages(messages, inputValue) {
  const filteredMessages = messages.filter(
    m => (inputValue >= m.lowerValue && inputValue < m.upperValue),
  );
  return filteredMessages.map(m => m.message);
}

class Pig extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getInvestmentMessages(investmentLabel) {
    const { focusedInput, myInvestments } = this.props;
    const { label, rate } = myInvestments.find(investment => investment.label === investmentLabel);
    const messages = getMessages(investmentLabel);

    if (label !== focusedInput) return [];
    return filterMessages(messages, rate);
  }

  getSavingsMessages() {
    if (this.props.focusedInput !== 'myCurrentMonthlySavings') return [];
    const messages = getMessages('myCurrentMonthlySavings');
    return filterMessages(messages, this.props.myCurrentMonthlySavings);
  }

  getAllMessages() {
    const messages = [];
    messages.push(...this.getInvestmentMessages('poupança'));
    messages.push(...this.getInvestmentMessages('renda fixa'));
    messages.push(...this.getInvestmentMessages('renda variável'));
    messages.push(...this.getSavingsMessages());
    return messages;
  }

  render() {
    const messages = this.getAllMessages();
    const newMessage = messages.length > 0;
    return (
      <div >
        {newMessage ? <div className={'pig'} /> : null}
        {newMessage
          && <div className={'message-box'}>
            {messages.map((m, id) => <p key={id}>{m}</p>)}
          </div>

        }
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
            .message-box {
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
      </div>
    );
  }
}

export default Pig;
