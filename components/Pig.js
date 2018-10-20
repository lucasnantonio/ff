import React, { Component } from 'react';

function getInvestmentMessages(investmentLabel) {
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
    'renda variável': [
      {
        lowerValue: 20,
        upperValue: 30,
        message: 'Parabéns, temos um novo Warren Buffett (ou um novo otário).',
      },

    ],
  };

  return messages[investmentLabel];
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

  filterInvestmentMessage(investmentLabel) {
    const { focusedInput, myInvestments } = this.props;
    const { label, rate } = myInvestments.find(investment => investment.label === investmentLabel);
    const messages = getInvestmentMessages(investmentLabel);

    if (label !== focusedInput) return [];
    return filterMessages(messages, rate);
  }

  getAllMessages() {
    const messages = [];
    messages.push(...this.filterInvestmentMessage('poupança'));
    messages.push(...this.filterInvestmentMessage('renda fixa'));
    messages.push(...this.filterInvestmentMessage('renda variável'));
    return messages;
  }

  render() {
    console.log(this.props.focusedInput);
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
