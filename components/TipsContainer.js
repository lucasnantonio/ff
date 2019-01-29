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
      <React.Fragment>
        <h1 className={'ml7-ns'}>Veja como melhorar o seu resultado:</h1>
        <StepperContainer>
          <GeneralInputTip
            id={'myCurrentMonthlySavings'}
            label={'E se você aumentasse as suas economias?'}
            text={'Aumentar o seu aporte mensal pode ter um impacto muito maior do que você imagina. Já imaginou se você conseguisse poupar mais ou aumentar a sua renda?'}
            studyCase={getObjectByLabel(this.props.studyCases, 'changeMonthlySavings')}
            studyCaseResults={getResultsByLabel(this.props.studyCasesResults, 'changeMonthlySavings')}
            handleInput={this.props.handleStudyCaseInput}
            currentRetirementAge={this.props.currentRetirementAge}
            myInvestments={this.props.myInvestments}
            retirementResults={this.props.retirementResults}
            isCurrency
          />
          <GeneralInputTip
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
          />
          {/* <LeaveHeritageTip
            studyCase={getObjectByLabel(this.props.studyCases, 'changeLeaveHeritage')}
            studyCaseResults={getResultsByLabel(this.props.studyCasesResults, 'changeLeaveHeritage')}
            handleInput={this.props.handleStudyCaseInput}
            currentRetirementAge={this.props.currentRetirementAge}
            myInvestments={this.props.myInvestments}
            retirementResults={this.props.retirementResults}
          />
          <ChangeInvestmentTip
            studyCase={getObjectByLabel(this.props.studyCases, 'changeSelectedInvestment')}
            studyCaseResults={getResultsByLabel(this.props.studyCasesResults, 'changeSelectedInvestment')}
            handleInput={this.props.handleStudyCaseWallet}
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
          <OptimizedCase
            studyCaseResults={getResultsByLabel(this.props.studyCasesResults, 'optimized')}
            retirementResults={this.props.retirementResults}
            currentRetirementAge={this.props.currentRetirementAge}
            myInvestments={this.props.myInvestments}
          /> */}
        </StepperContainer>
      </React.Fragment>
    );
  }
}

export default TipsContainer;
