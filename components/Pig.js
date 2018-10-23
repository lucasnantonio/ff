import React, { Component } from 'react';

function inputMessages(label) {
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
    myCurrentAge: [
      {
        lowerValue: 0,
        upperValue: 29,
        message: 'Está começando cedo, parabéns. A idade média das pessoas que começam a poupar para a aposentadoria é 28 anos.',
        src: 'Fonte: SPC Brasil. O preparo para a aposentadoria no Brasil. Abril 2018.',
      },
    ],
    myCurrentMonthlySavings: [
      {
        lowerValue: 0.01,
        upperValue: 10000,
        message: 'Sabia que apenas 31% dos brasileiros pouparam parte dos seus rendimentos nos últimos 12 meses? Você faz parte desse grupo.',
        src: 'Fonte: Banco Central do Brasil. Série cidadania financeira. Novembro 2017.',

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
    myRetirementIncome: [
      {
        lowerValue: 5645.81,
        upperValue: Number.POSITIVE_INFINITY,
        message: 'Você pretende se aposentar com um valor acima do teto atual do INSS (R$ 5645,81), portanto, provavelente você precisa se preocupar em complementar a sua aposentadoria.',
        src: 'Fonte: Banco Central do Brasil. Série cidadania financeira. Novembro 2017.',
      },
    ],
  };

  return messages[label];
}

function selectedInvestmentMessage(label) {
  return {
    poupança: [
      {
        message: 'poupança',
        src: 'SPC',
      },
    ],
    'renda fixa': [
      { message: 'renda fixa' },
    ],
    'renda variável': [
      { message: 'renda variável' },
    ],
  }[label];
}

let timeoutVar = 0;

class Pig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const prevSelectedInvestment = prevProps.myInvestments.find(i => i.isSelected);
    const newSelectedInvestment = this.props.myInvestments.find(i => i.isSelected);

    if (prevSelectedInvestment === undefined) return null;

    if (prevSelectedInvestment.label !== newSelectedInvestment.label) {
      // show message again if the user changes the selected investment
      this.setState({ open: true });
    }
  }

  filterMessages(label, messages, inputValue) {
    if (label !== this.props.focusedInput) return [];

    return messages.filter(
      m => (inputValue >= m.lowerValue && inputValue < m.upperValue),
    );
  }

  getInvestmentMessages(investmentLabel) {
    const { label, rate } = this.props.myInvestments.find(investment => investment.label === investmentLabel);
    const messages = inputMessages(investmentLabel);

    return this.filterMessages(label, messages, rate);
  }

  getInputMessages(label) {
    const messages = inputMessages(label);
    return this.filterMessages(label, messages, this.props[label]);
  }

  getSelectedInvestmentMessage(duration = 2000) {
    const selectedInvestment = this.props.myInvestments.find(i => i.isSelected);
    if (selectedInvestment === undefined) return [];

    clearTimeout(timeoutVar);
    timeoutVar = setTimeout(() => this.setState({ open: false }), duration);
    if (!this.state.open) return [];

    return selectedInvestmentMessage(selectedInvestment.label);
  }

  getAllMessages() {
    const messages = [];
    messages.push(...this.getInputMessages('myCurrentAge'));
    messages.push(...this.getInputMessages('myCurrentMonthlySavings'));
    messages.push(...this.getInputMessages('myRetirementIncome'));
    messages.push(...this.getInvestmentMessages('poupança'));
    messages.push(...this.getInvestmentMessages('renda fixa'));
    messages.push(...this.getInvestmentMessages('renda variável'));
    messages.push(...this.getSelectedInvestmentMessage());
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
            {messages.map((m, id) => <div key={id}>
              {('message' in m)
                && <p className={'message-content'}>
                  {m.message}
                </p>
              }
              {('src' in m)
                && <p className={'message-src'}>
                  {m.src}
                </p>
              }
            </div>)}
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
            .message-content {
              font-size: 14px;
            }
            .message-src {
              font-size: 10px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Pig;
