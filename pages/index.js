import React, { Component } from 'react';
import { hotjar } from 'react-hotjar';
import { initGA, logPageView, logEvent } from '../utils/analytics';
import Questions from '../components/Questions';
import Answer from '../components/Answer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { getRetirementResults, getStudyCasesResults } from '../utils/math';
import { isNumber } from '../utils/input';
import NavBar from '../components/NavBar';
import colors from '../components/Colors';
import CurrencyInputTip from '../components/Tips/CurrencyInputTip';
import LeaveHeritageTip from '../components/Tips/LeaveHeritageTip';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingAnswer: false,
      isShowingQuestions: false,
      myCurrentBalance: 0,
      myCurrentAge: 18,
      myCurrentMonthlySavings: 100,
      myRetirementIncome: 0,
      myLifeExpectancy: 100,
      annualSavingsIncreaseRate: 0,
      selectedInvestment: false,
      leaveHeritage: false,
      myInvestments: [
        {
          label: 'poupança',
          rate: 1.5,
          isSelected: false,
        },
        {
          label: 'renda fixa',
          rate: 4.5,
          isSelected: false,
        },
        {
          label: 'renda variável',
          rate: 7.0,
          isSelected: false,
        },
      ],
      studyCases: [
        {
          label: 'case0',
          myCurrentMonthlySavings: undefined,
        },
        {
          label: 'case1',
          myCurrentBalance: undefined,
        },
        {
          label: 'case2',
          leaveHeritage: false,
        },
      ],
      lifeEvents: [{}],
      retirementResults: false,
      studyCasesResults: false,
      focusedInput: '',

    };
  }

  componentDidMount() {
    if (process.env.NODE_ENV === 'development') return null;

    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
    hotjar.initialize(1140598, 6);
  }

  componentDidUpdate(prevProps, prevState) {
    const nextRetirementResults = getRetirementResults(this.state);
    const nextStudyCasesResults = getStudyCasesResults(this.state);

    if (JSON.stringify(prevState.retirementResults) !== JSON.stringify(nextRetirementResults)) {
      this.setState({ retirementResults: nextRetirementResults });
    }

    if (JSON.stringify(prevState.studyCasesResults) !== JSON.stringify(nextStudyCasesResults)) {
      this.setState({ studyCasesResults: nextStudyCasesResults });
    }
  }

  resetApp = () => {
    this.setState({
      isShowingAnswer: false,
      isShowingQuestions: false,
      selectedInvestment: false,
    });
  };

  startApp = () => {
    this.setState({ isShowingQuestions: true });
    logEvent('User', 'clicked start');
  };

  handleShowAnswer = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    this.setState({ isShowingAnswer: true });
    logEvent('User', 'clicked calculate');
  };

  handleBack = () => {
    this.setState({ isShowingAnswer: false, isShowingIntro: true });
  };

  handleCurrencyInput = (e, floatValue) => {
    const { id } = e.target;
    this.setState({ [id]: floatValue });
  };

  handleInputButtons = (e) => {
    const parentNode = e.target.parentNode.parentNode.querySelectorAll('input')[0];
    const parentId = parentNode.id;
    const parentValue = parentNode.value;
    this.setState({ [parentId]: parseFloat(parentValue) });
  };

  handleInput = (e, floatValue) => {
    const { id } = e.target;
    this.setState({ [id]: parseFloat(floatValue) });
  };

  handleStudyCaseInput = (e, floatValue, studyCaseLabel) => {
    const { id, type, checked } = e.target;

    const updatedStudyCases = this.state.studyCases.map((item) => {
      if (item.label === studyCaseLabel) {
        return {
          ...item,
          [id]: type === 'checkbox' ? checked : parseFloat(floatValue),
        };
      }
      return item;
    });

    this.setState({ studyCases: updatedStudyCases });
  };

  handleInvestmentRateInput = (e) => {
    const { id, value } = e.target;
    const updateMyInvestments = this.state.myInvestments.map((item) => {
      if (item.label === id) {
        return {
          ...item,
          rate: value,
        };
      }
      return item;
    });
    this.setState({ myInvestments: updateMyInvestments });
  };

  handleInvestmentSelector = (e, index) => {
    const investmentsState = this.state.myInvestments;
    const ressetedInvestment = investmentsState.map((item, itemIndex) => ({
      ...item,
      isSelected: index === itemIndex,
    }));
    this.setState({ myInvestments: ressetedInvestment, selectedInvestment: true });

    const investmentTip = document.getElementById('investmentTip');
    if (investmentTip) {
      investmentTip.scrollIntoView({ behavior: 'smooth' });
    }

    // only for analytics
    const selectedInvestment = ressetedInvestment.filter(i => i.isSelected)[0];
    logEvent('User', 'Selected Investment');
  };

  handleTableInput = (idx, tableName, table, textField = false) => (event) => {
    const { value } = event.target;
    const field = event.target.id;

    if (isNumber(value) || textField) {
      const updatedTable = table.map((row, pidx) => {
        if (idx === pidx) {
          return {
            ...row,
            [field]: value,
          };
        }
        return row;
      });
      this.setState(prevState => ({
        [tableName]: updatedTable,
        retirementResults: getRetirementResults({ ...prevState, [tableName]: updatedTable }),
      }));
    }
  };

  handleAddTableRow = (tableName, fields) => () => {
    this.setState({
      [tableName]: [...this.state[tableName], fields],
    });
    logEvent('User', 'added life event');
  };

  handleRemoveTableRow = (idx, tableName, table) => () => {
    const updatedTable = table.filter((p, pidx) => idx !== pidx);
    this.setState(prevState => ({
      [tableName]: updatedTable,
      retirementResults: getRetirementResults({ ...prevState, [tableName]: updatedTable }),
    }));
    logEvent('User', 'removed life event');
  };

  handleResetRates = () => {
    const { myInvestments } = this.state;

    const rates = {
      poupança: 1.5,
      'renda fixa': 4.5,
      'renda variável': 7.0,
    };

    const reseted = myInvestments.map(investment => ({
      ...investment,
      rate: rates[investment.label],
    }));

    this.setState({ myInvestments: reseted });
    this.setState(prevState => ({
      retirementResults: getRetirementResults({ ...prevState, myInvestments: reseted }),
    }));
    logEvent('User', 'clicked reset taxas');
  };

  setFocusedInput = (inputId) => {
    this.setState({ focusedInput: inputId });
  };

  getSelectedInvestmentRetirementData() {
    return (
      this.state.retirementResults.filter(
        (investment, index) => this.state.myInvestments[index].isSelected,
      )[0][1]
    );
  }

  handle


  render() {
    return (
      <div id="pageWrapper" className="center vh-100">
        <Header title="Aposentar.me" />
        <NavBar isShowingAnswer={this.state.isShowingAnswer} />
        {!this.state.isShowingAnswer ? (
          <Hero startApp={this.startApp} isShowingQuestions={this.state.isShowingQuestions} />
        ) : (
          <div>
            <Answer {...this.state} />
            <CurrencyInputTip
              id={'myCurrentMonthlySavings'}
              placeHolder={this.state.myCurrentMonthlySavings}
              label={'E se você aumentasse as suas economias?'}
              text={'Aumentar o seu aporte mensal pode ter um impacto muito maior do que você imagina. Já imaginou se você conseguisse poupar mais ou aumentar a sua renda?'}
              studyCase={this.state.studyCases[0]}
              studyCaseResults={this.state.studyCasesResults[0]}
              handleInput={this.handleStudyCaseInput}
              currentRetirementAge={this.getSelectedInvestmentRetirementData().retirement.age}
              myInvestments={this.state.myInvestments}
              retirementResults={this.state.retirementResults}
            />
            <CurrencyInputTip
              id={'myCurrentBalance'}
              placeHolder={this.state.myCurrentBalance}
              label={'E se você não tivesse nada guardado?'}
              text={'Parabéns por ter conseguido poupar até agora. Já imaginou se você não tivesse guardado nada até agora?'}
              studyCase={this.state.studyCases[1]}
              studyCaseResults={this.state.studyCasesResults[1]}
              handleInput={this.handleStudyCaseInput}
              currentRetirementAge={this.getSelectedInvestmentRetirementData().retirement.age}
              myInvestments={this.state.myInvestments}
              retirementResults={this.state.retirementResults}
            />
            <LeaveHeritageTip
              studyCase={this.state.studyCases[2]}
              studyCaseResults={this.state.studyCasesResults[2]}
              handleInput={this.handleStudyCaseInput}
              currentRetirementAge={this.getSelectedInvestmentRetirementData().retirement.age}
              myInvestments={this.state.myInvestments}
              retirementResults={this.state.retirementResults}
            />
          </div>
        )}
        <div
          id="questionsContainer"
          className={`w-100 center ${this.state.isShowingQuestions && 'pt5 pb6'} `}
          style={{ backgroundColor: colors.lightGray }}
        >
          {this.state.isShowingQuestions && (
            <Questions
              {...this.state}
              isShowingAnswer={this.state.isShowingAnswer}
              startApp={this.startApp}
              handleShowAnswer={this.handleShowAnswer}
              handleResetRates={this.handleResetRates}
              handleInput={this.handleInput}
              handleInputButtons={this.handleInputButtons}
              handleCurrencyInput={this.handleCurrencyInput}
              handleTableInput={this.handleTableInput}
              handleAddTableRow={this.handleAddTableRow}
              handleRemoveTableRow={this.handleRemoveTableRow}
              handleInvestmentSelector={this.handleInvestmentSelector}
              handleInvestmentRateInput={this.handleInvestmentRateInput}
              setFocusedInput={this.setFocusedInput}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Index;
