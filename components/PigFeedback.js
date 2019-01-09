import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import colors from './Colors';

const feedbacklist = {
  mySelectedInvestment: {
    poupança:
      'Cuidado ao escolher a poupança como seu investimento principal. Existem opções com a mesma segurança e rendimentos muito melhores. Apesar disso, 39% dos brasileiros que se preparam para aposentadoria deixam o dinheiro na poupança. :(',
    'renda fixa':
      'Boa escolha! Investimentos de renda fixa, como Tesouro Direto, CDBs e outros, são uma boa opção de baixo risco para quem está focado no longo prazo.',
    'renda variável':
      'Ótimo! Investimentos de renda variável são uma boa opção para quem '
      + 'está focado no longo prazo. Não é todo mundo que se sente '
      + 'confortável em ver o dinheiro oscilando todo dia, portanto, é importante '
      + 'checar o seu perfil de investimento.',
  },
  poupança: [
    {
      lowerValue: 1.6,
      upperValue: 3.4,
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
  ],
  'renda fixa': [
    {
      lowerValue: 5,
      upperValue: 6.9,
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
      message: 'Uau! Me conta a mágica que você está fazendo pra ter esse rendimento!',
      src: 'Fonte: Berkshire Hathaway. Annual Report, 2017.',
    },
  ],
  myCurrentAge: [
    {
      lowerValue: 0,
      upperValue: 29,
      message:
        'Está começando cedo, parabéns! A idade média das pessoas que começam a poupar para a aposentadoria é 28 anos. Esses anos iniciais de investimento fazem muita diferença lá na frente.',
      src: 'Fonte: SPC Brasil. O preparo para a aposentadoria no Brasil. Abril 2018.',
    },
    {
      lowerValue: 50,
      upperValue: 60,
      message:
        'Nunca é tarde para começar! Comece a poupar agora e garanta um futuro mais independente.',
    },
  ],
  myCurrentMonthlySavings: [
    {
      lowerValue: 10,
      upperValue: 999,
      message:
        'Guardar uma quantia todo mês, mesmo que pequena, terá um impacto enorme na sua qualidade de vida lá na frente.',
      reaction: 0,
    },
    {
      lowerValue: 1000,
      upperValue: 9999,
      message:
        'Sabia que apenas 31% dos brasileiros pouparam parte dos seus rendimentos nos últimos 12 meses? Você faz parte desse grupo, parabéns!',
      src: 'Fonte: Banco Central do Brasil. Série cidadania financeira. Novembro 2017.',
      reaction: 0,
    },
    {
      lowerValue: 10000,
      upperValue: Number.POSITIVE_INFINITY,
      message:
        'Uau! Com contribuições mensais desse tamanho, você vai atingir sua independência financeira rapidinho.',
      reaction: 1,
    },
  ],
  myRetirementIncome: [
    {
      lowerValue: 5645.81,
      upperValue: Number.POSITIVE_INFINITY,
      message:
        'Você pretende se aposentar com um valor acima do teto atual do INSS (R$ 5645,81), portanto, o restante deverá vir das suas economias ao longo dos anos.',
      src: 'Fonte: Banco Central do Brasil. Série cidadania financeira. Novembro 2017.',
    },
  ],
};

class PigFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = { render: false };
  }

  hasFeedback = (id) => {
    const feedback = feedbacklist[id]
      && feedbacklist[id].filter(
        item => this.props.value >= item.lowerValue && this.props.value <= item.upperValue,
      );
    return feedback && feedback[0];
  };

  getFeedback = (id) => {
    const feedback = feedbacklist[id]
      && feedbacklist[id].filter(
        item => this.props.value >= item.lowerValue && this.props.value <= item.upperValue,
      );
    return feedback && feedback[0] && feedback[0].message;
  };

  getInvestmentFeedback = (options) => {
    const selectedInvestment = options.filter(item => item.isSelected);
    const feedback = feedbacklist.mySelectedInvestment[selectedInvestment[0].label];
    return feedback;
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ render: true });
    }, 1000);
  }

  render() {
    return (
      <CSSTransitionGroup
        transitionName="feedback"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {this.hasFeedback(this.props.id) && this.state.render && (
          <p
            style={{
              color: colors.darkGreenActive,
              padding: '2rem 2rem',
              border: `2px solid ${colors.lightGray2}`,
            }}
            className="pt2 mt4 overflow-hidden br3 f6-ns f7 lh-copy w-100 mb0 measure bg-white"
          >
            {this.getFeedback(this.props.id)}
          </p>
        )}
        {this.props.investmentOptions !== undefined && this.props.investmentOptions.filter(i => i.isSelected).length > 0 && this.state.render && (
          <p
            id="investmentTip"
            style={{
              color: colors.darkGreenActive,
              padding: '2rem 2rem',
              border: `2px solid ${colors.lightGray2}`,
            }}
            className="bg-white pt2 mt4 overflow-hidden br3 f6-ns f7 lh-copy w-100 mb0 measure"
          >
            {this.getInvestmentFeedback(this.props.investmentOptions)}
          </p>
        )}
        <style jsx>
          {`
            p {
              -moz-transition: all 0.5s cubic-bezier(0.72, 0.01, 0.58, 1.16);
              -ms-transition: all 0.5s cubic-bezier(0.72, 0.01, 0.58, 1.16);
              -o-transition: all 0.5s cubic-bezier(0.72, 0.01, 0.58, 1.16);
              -webkit-transition: all 0.5s cubic-bezier(0.72, 0.01, 0.58, 1.16);
              transition: all 0.5s cubic-bezier(0.72, 0.01, 0.58, 1.16);
            }
             {
              .feedback-appear {
                opacity: 0;
                max-height: 0;
                padding: 0 0;
                transform: translateY(20px);
              }
              .feedback-appear.feedback-appear-active {
                opacity: 1;
                padding: 2rem 2rem;
                max-height: 20rem;
                transform: translateY(0px);
              }
              .feedback-leave {
                opacity: 1;
                padding: 2rem 2rem;
                max-height: 20rem;
                transform: translateY(0px);
              }
              .feedback-leave.feedback-leave-active {
                opacity: 0;
                padding: 0 0;
                max-height: 0;
                transform: translateY(20px);
              }
              .feedback-enter {
                opacity: 0;
                padding: 0 0;
                max-height: 0;
                transform: translateY(20px);
              }
              .feedback-enter.feedback-enter-active {
                opacity: 1;
                padding: 2rem 2rem;
                max-height: 20rem;
                transform: translateY(0px);
              }
            }
          `}
        </style>
      </CSSTransitionGroup>
    );
  }
}

export default PigFeedback;
