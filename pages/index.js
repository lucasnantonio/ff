import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { initGA, logPageView, logEvent } from '../utils/analytics';
import Questions from '../components/Questions';
import Answer from '../components/Answer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Pig from '../components/Pig';
import { getRetirementResults } from '../utils/math';
import { isNumber } from '../utils/input';
import NavBar from '../components/NavBar';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingAnswer: false,
      isShowingQuestions: false,
      myCurrentBalance: 0,
      myCurrentAge: 18,
      myCurrentMonthlySavings: 0,
      myRetirementIncome: 0,
      myLifeExpectancy: 100,
      annualSavingsIncreaseRate: 1,
      selectedInvestment: false,
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
      lifeEvents: [{}],
      retirementResults: false,
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
  }

  componentDidUpdate(prevProps, prevState) {
    const nextRetirementResults = getRetirementResults(this.state);
    if (JSON.stringify(prevState.retirementResults) !== JSON.stringify(nextRetirementResults)) {
      this.setState({ retirementResults: nextRetirementResults });
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

  handleInput = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: parseFloat(value) });
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
  };

  handleRemoveTableRow = (idx, tableName, table) => () => {
    const updatedTable = table.filter((p, pidx) => idx !== pidx);
    this.setState(prevState => ({
      [tableName]: updatedTable,
      retirementResults: getRetirementResults({ ...prevState, [tableName]: updatedTable }),
    }));
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
  };

  setFocusedInput = (inputId) => {
    this.setState({ focusedInput: inputId });
  };

  render() {
    return (
      <div id="pageWrapper" className="center vh-100">
        <Header title="Aposentar.me" />
        <NavBar isShowingAnswer={this.state.isShowingAnswer} resetApp={this.resetApp} />
        {!this.state.isShowingAnswer ? (
          <Hero startApp={this.startApp} isShowingQuestions={this.state.isShowingQuestions} />
        ) : (
          <Answer {...this.state} />
        )}
        <div id="questionsContainer" className="mw7-ns ph0-l ph4 center">
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
