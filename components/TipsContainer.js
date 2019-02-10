import React, { Component } from 'react';
import GeneralInputTip from './Tips/GeneralInputTip';
import LeaveHeritageTip from './Tips/LeaveHeritageTip';
import ChangeInvestmentTip from './Tips/ChangeInvestmentTip';
import OptimizedCase from './Tips/OptimizedCase';
import { getObjectByLabel, getResultsByLabel } from '../utils/utils';
import StepperContainer from './StepperContainer';

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
          <GeneralInputTip
            id={'myCurrentMonthlySavings'}
            text={'Aumentar o seu aporte mensal pode ter um impacto muito maior do que você imagina.'}
            actionText={'Experimente poupar mais ou aumentar a sua renda.'}
            studyCase={getObjectByLabel(this.props.studyCases, 'changeMonthlySavings')}
            studyCaseResults={getResultsByLabel(this.props.studyCasesResults, 'changeMonthlySavings')}
            handleInput={this.props.handleStudyCaseInput}
            currentRetirementAge={this.props.currentRetirementAge}
            myInvestments={this.props.myInvestments}
            retirementResults={this.props.retirementResults}
            isCurrency
          />
          <ChangeInvestmentTip
            text={'Aonde você aplica o seu dinheiro pode ter um impacto muito grande.'}
            actionText={'Experimente diversificar os seus investimentos.'}
            studyCase={getObjectByLabel(this.props.studyCases, 'changeSelectedInvestment')}
            studyCaseResults={getResultsByLabel(this.props.studyCasesResults, 'changeSelectedInvestment')}
            handleInput={this.props.handleStudyCaseWallet}
            currentRetirementAge={this.props.currentRetirementAge}
            myInvestments={this.props.myInvestments}
            retirementResults={this.props.retirementResults}
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
          {/* <LeaveHeritageTip
            studyCase={getObjectByLabel(this.props.studyCases, 'changeLeaveHeritage')}
            studyCaseResults={getResultsByLabel(this.props.studyCasesResults, 'changeLeaveHeritage')}
            handleInput={this.props.handleStudyCaseInput}
            currentRetirementAge={this.props.currentRetirementAge}
            myInvestments={this.props.myInvestments}
            retirementResults={this.props.retirementResults}
          />

          <GeneralInputTip
            id={'myCurrentAge'}
            label={'Veja o que acontece se você mudar a sua idade.'}
            text={'Quanto antes você começar, mais cedo você vai atingir a tranquilidade financeira.'}
            studyCase={getObjectByLabel(this.props.studyCases, 'changeCurrentAge')}
            studyCaseResults={getResultsByLabel(this.props.studyCasesResults, 'changeCurrentAge')}
            handleInput={this.props.handleStudyCaseInput}
            currentRetirementAge={this.props.currentRetirementAge}
            myInvestments={this.props.myInvestments}
            retirementResults={this.props.retirementResults}
          />
           */}
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
