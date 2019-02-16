import React, { Component } from 'react';
import GeneralInputTip from './Tips/GeneralInputTip';
import LeaveHeritageTip from './Tips/LeaveHeritageTip';
import ChangeInvestmentTip from './Tips/ChangeInvestmentTip';
import OptimizedCase from './Tips/OptimizedCase';
import { getObjectByLabel, getResultsByLabel } from '../utils/utils';
import StepperContainer from './StepperContainer';
import GeneralTextTip from './Tips/GeneralTextTip';

class TipsContainer extends Component {
  render() {
    return (
      <div
        id={'TipsContainer'}
        className={'w-100 ph4 ph6-l'}
        style={{ paddingTop: '8rem', minWidth: '100%' }}
        >
        <StepperContainer
          handleShowTips={this.props.handleShowTips}
          resettingStepper={this.props.resettingStepper}
        >
          <GeneralTextTip
            title={'Introdução'}>
            <p>O objetivo agora é mexer em algumas variáveis e mostrar o impacto de cada uma delas
              no tempo até a independência financeira.</p>
            <p>No final você poderá aplicar essas mudanças no seu resultado.</p>
          </GeneralTextTip>
          <GeneralTextTip
            title={'Introdução'}>
            <p>O tempo até a aposentadoria é governado por basicamente 3 variáveis:</p>
            <ul>
              <li>aporte (inicial e mensal)</li>
              <li>tempo</li>
              <li>rendimentos</li>
            </ul>
            <p>Vamos explorar um pouco dessas variáveis...</p>
          </GeneralTextTip>
          <GeneralTextTip
            title={'Aporte'}>
            <p>O aporte talvez seja a variável que esteja mais sob o nosso controle e uma das que
              pode ter o maior impacto. Não é difícil imaginar uma situação que poderíamos
              economizar um pouco mais de dinheiro por mês, conseguir uma renda extra ou quem sabe
              um novo emprego. Esse dinheiro extra pode ser investido para adiantar a sua
              independência financeira.</p>
          </GeneralTextTip>
          <GeneralInputTip
            id={'myCurrentMonthlySavings'}
            actionText={'Experimente poupar mais ou aumentar a sua renda.'}
            studyCase={getObjectByLabel(this.props.studyCases, 'changeMonthlySavings')}
            studyCaseResults={getResultsByLabel(this.props.studyCasesResults, 'changeMonthlySavings')}
            handleInput={this.props.handleStudyCaseInput}
            currentRetirementAge={this.props.currentRetirementAge}
            myInvestments={this.props.myInvestments}
            retirementResults={this.props.retirementResults}
            isCurrency
            myStep={0}
            applyTips={this.props.applyTips}
          />

          <GeneralTextTip
            title={'Tempo'}>
            <p>Você já deve ter ouvido falar que [quanto antes começar, melhor], mas qual será a
              diferença que isso faz?
            </p>
            <p>Se você ainda não guarda dinheiro pensando na aposentadoria, experimente ver a
              a diferença que faz se você começar daqui 5, 10 ou 15 anos.
            </p>
          </GeneralTextTip>

          <GeneralInputTip
            id={'myCurrentAge'}
            actionText={'Veja o que acontece se você começar a poupar só daqui a alguns anos.'}
            studyCase={getObjectByLabel(this.props.studyCases, 'changeCurrentAge')}
            studyCaseResults={getResultsByLabel(this.props.studyCasesResults, 'changeCurrentAge')}
            handleInput={this.props.handleStudyCaseInput}
            currentRetirementAge={this.props.currentRetirementAge}
            myInvestments={this.props.myInvestments}
            retirementResults={this.props.retirementResults}
            myStep={1}
            applyTips={this.props.applyTips}
          />

          <GeneralTextTip
            title={'Rendimentos'}>
            <p>Depois que começa a sobrar um dinheiro por mês, o próximo passo é investir.</p>
            <p>Todos os tipos de aplicações: Poupança, renda fixa e renda váriavel tem a sua
              importância na carteira de quem busca a independência financeira.</p>
            <p>Não tem problema nenhum deixar uma pequena quantidade na poupança, tipo aquele dinheiro
              que vai ser utilizado para pagar as contas ou para emergências. Aquele dinheiro que vai
              ser utilizado para a sua aposentadoria pode ser destinado a aplicações de maior rendimento.
            </p>
          </GeneralTextTip>

          <ChangeInvestmentTip
            actionText={'Experimente diversificar os seus investimentos.'}
            studyCase={getObjectByLabel(this.props.studyCases, 'changeSelectedInvestment')}
            studyCaseResults={getResultsByLabel(this.props.studyCasesResults, 'changeSelectedInvestment')}
            handleInput={this.props.handleStudyCaseWallet}
            currentRetirementAge={this.props.currentRetirementAge}
            myInvestments={this.props.myInvestments}
            retirementResults={this.props.retirementResults}
            myStep={2}
            applyTips={this.props.applyTips}
          />

          <GeneralTextTip
            title={'Viver de rendimentos'}>
            <p>Não sei se você reparou, mas a linha do gráfico começa a cair após a aposentadoria.
              Isso significa que você estará consumindo mais do que os rendimentos das suas aplicações,
              até que você não tenha nenhum dinheiro.
            </p>
            <p>Para que essa curva nunca caia, é necessário viver apenas com os rendimentos, para isso,
              é preciso esperar mais um pouco até a aposentadoria.</p>
          </GeneralTextTip>

          <LeaveHeritageTip
            actionText={'Veja o quanto mais você deve esperar até viver apenas com os rendimentos.'}
            studyCase={getObjectByLabel(this.props.studyCases, 'changeLeaveHeritage')}
            studyCaseResults={getResultsByLabel(this.props.studyCasesResults, 'changeLeaveHeritage')}
            handleInput={this.props.handleStudyCaseInput}
            currentRetirementAge={this.props.currentRetirementAge}
            myInvestments={this.props.myInvestments}
            retirementResults={this.props.retirementResults}
            myStep={3}
            applyTips={this.props.applyTips}
          />

          {/* <GeneralInputTip
            id={'myCurrentBalance'}
            label={'E se você não tivesse nada guardado?'}
            text={'Parabéns por ter conseguido poupar até agora. Já imaginou se você não tivesse guardado nada até agora?'}
            studyCase={getObjectByLabel(this.props.studyCases, 'changeCurrentBalance')}
            studyCaseResults={getResultsByLabel(this.props.studyCasesResults, 'changeCurrentBalance')}
            handleInput={this.props.handleStudyCaseInput}
            currentRetirementAge={this.props.currentRetirementAge}
            myInvestments={this.props.myInvestments}
            retirementResults={this.props.retirementResults}
            isCurrency
          /> */}

           <OptimizedCase
            text={'Resultado Final.'}
            actionText={''}
            studyCase={getObjectByLabel(this.props.studyCases, 'optimized')}
            studyCaseResults={getResultsByLabel(this.props.studyCasesResults, 'optimized')}
            currentRetirementAge={this.props.currentRetirementAge}
            retirementResults={this.props.retirementResults}
            handleApplyTips={this.props.handleApplyTips}
          />
        </StepperContainer>
      </div>
    );
  }
}

export default TipsContainer;
