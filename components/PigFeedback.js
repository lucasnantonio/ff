import React, { Component } from 'react';
import colors from './Colors';

class PigFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getFeedback = () => {
    const feedbacklist = {
      poupança: [
        {
          lowerValue: 1.6,
          upperValue: 3.5,
          message:
            'Você está otimista. O retorno médio real da poupança do ano 2000 até hoje foi de apenas 1.4% a.a.',
          src: 'Fonte: www.ipeadata.gov.br',
        },
        {
          lowerValue: 3.5,
          upperValue: 5.1,
          message:
            'Desde o ano 2000, a poupança teve essa ordem de rendimento apenas em 2006. Você está certo dessa taxa?',
          src: 'Fonte: www.ipeadata.gov.br',
        },
        {
          lowerValue: 5.1,
          upperValue: Number.POSITIVE_INFINITY,
          message: 'Com esse rendimento na poupança eu nem trabalhava mais.',
        },
      ],
      'renda fixa': [
        {
          lowerValue: 5,
          upperValue: 7,
          message:
            'Você está otimista. O retorno médio real do tesouro SELIC do ano 2000 até hoje foi de apenas 4.7% a.a.',
          src: 'Fonte: www.ipeadata.gov.br',
        },
        {
          lowerValue: 7,
          upperValue: 9,
          message:
            'Desde o ano 2000, a renda fixa teve essa ordem de rendimento apenas em 4 anos. Você está certo dessa taxa?',
          src: 'Fonte: www.ipeadata.gov.br',
        },
      ],
      'renda variável': [
        {
          lowerValue: 20,
          upperValue: Number.POSITIVE_INFINITY,
          message:
            'Parabéns, temos um novo Warren Buffett. O retorno anual da Berkshire Hathaway é de 20,9%.',
          src: 'Fonte: Berkshire Hathaway. Annual Report, 2017.',
        },
      ],
      myCurrentAge: [
        {
          lowerValue: 0,
          upperValue: 29,
          message:
            'Está começando cedo, parabéns. A idade média das pessoas que começam a poupar para a aposentadoria é 28 anos.',
          src: 'Fonte: SPC Brasil. O preparo para a aposentadoria no Brasil. Abril 2018.',
        },
        {
          lowerValue: 50,
          upperValue: 60,
          message: 'Nunca é tarde para começar.',
        },
      ],
      myCurrentMonthlySavings: [
        {
          lowerValue: 0.01,
          upperValue: 10000,
          message:
            'Sabia que apenas 31% dos brasileiros pouparam parte dos seus rendimentos nos últimos 12 meses? Você faz parte desse grupo.',
          src: 'Fonte: Banco Central do Brasil. Série cidadania financeira. Novembro 2017.',
          reaction: 0,
        },
        {
          lowerValue: 10000,
          upperValue: 30000,
          message: 'Aooow chefia. Tá cheio da nota, hein?!',
          reaction: 1,
        },
        {
          lowerValue: 30000,
          upperValue: Number.POSITIVE_INFINITY,
          message: 'Ah, tá de sacanagem que você poupa tudo isso por mês.',
          reaction: 2,
        },
      ],
      myRetirementIncome: [
        {
          lowerValue: 5645.81,
          upperValue: Number.POSITIVE_INFINITY,
          message:
            'Você pretende se aposentar com um valor acima do teto atual do INSS (R$ 5645,81), portanto, provavelente você precisa se preocupar em complementar a sua aposentadoria.',
          src: 'Fonte: Banco Central do Brasil. Série cidadania financeira. Novembro 2017.',
        },
      ],
    };
    return feedbacklist;
  };

  render() {
    return (
      <p style={{ color: colors.darkGreen }} className="f5 lh-copy w-100 mb0 measure">
        {this.getFeedback()[this.props.id] && this.getFeedback()[this.props.id][0].message}
      </p>
    );
  }
}

export default PigFeedback;
