import React, { Component } from 'react';
import { hotjar } from 'react-hotjar';
import { initGA, logPageView, logEvent } from '../utils/analytics';
import Questions from '../components/Questions';
import Answer from '../components/Answer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TipsContainer from '../components/TipsContainer';
import NavBar from '../components/NavBar';
import colors from '../components/Colors';
import { getRetirementResults, getStudyCasesResults } from '../utils/math';
import { isNumber } from '../utils/input';

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
      useWallet: false,
      myWallet: {
        poupança: 0,
        'renda fixa': 0,
        'renda variável': 0,
      },
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
          label: 'changeMonthlySavings',
          myCurrentMonthlySavings: undefined,
        },
        {
          label: 'changeCurrentBalance',
          myCurrentBalance: undefined,
        },
        {
          label: 'changeLeaveHeritage',
          leaveHeritage: undefined,
        },
        {
          label: 'changeSelectedInvestment',
          myWallet: undefined,
        },
        {
          label: 'changeCurrentAge',
          myCurrentAge: undefined,
        },
        {
          label: 'optimized',
          myCurrentMonthlySavings: undefined,
          myCurrentBalance: undefined,
          leaveHeritage: undefined,
          myCurrentAge: undefined,
          myWallet: undefined,
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

    // update studyCases with user input
    const studyCases = this.state.studyCases.map(item => (
      Object.assign({}, ...Object.keys(item).map((key) => {
        if (key === 'label') {
          return { [key]: item[key] };
        }
        return { [key]: this.state[key] };
      }))
    ));
    this.setState({ studyCases });
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
    const {
      id, type, checked, value,
    } = e.target;

    const updatedStudyCases = this.state.studyCases.map((item) => {
      if (item.label === studyCaseLabel || (item.label === 'optimized' && id in item)) {
        if (type === 'radio') {
          return {
            ...item,
            [id]: value,
          };
        }
        return {
          ...item,
          [id]: type === 'checkbox' ? checked : parseFloat(floatValue),
        };
      }
      return item;
    });

    this.setState({ studyCases: updatedStudyCases });
  };

  handleStudyCaseWallet = (e, studyCaseLabel) => {
    const { id, value } = e.target;
    const studyCases = this.state.studyCases.map((item) => {
      if (item.label === studyCaseLabel || (item.label === 'optimized' && 'myWallet' in item)) {
        const myWallet = { ...item.myWallet, [id]: parseFloat(value) };
        return {
          ...item,
          myWallet,
        };
      }
      return item;
    });
    this.setState({ studyCases });
  }

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

    const selectedInvestment = ressetedInvestment.filter(i => i.isSelected);
    if (selectedInvestment.length > 0) {
      const myWallet = Object.assign(
        {},
        ...Object.keys(this.state.myWallet).map(key => (
          { [key]: key === selectedInvestment[0].label ? 100 : 0 }
        )),
      );
      this.setState({ myWallet });
    }

    this.setState({
      myInvestments: ressetedInvestment,
      selectedInvestment: true,
    });

    const investmentTip = document.getElementById('investmentTip');
    if (investmentTip) {
      investmentTip.scrollIntoView({ behavior: 'smooth' });
    }

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

  handleCheckbox = (event) => {
    const { id, checked } = event.target;
    this.setState({ [id]: checked });
  }

  handleWalletInput = (event) => {
    const { id, value } = event.target;
    const myWallet = { ...this.state.myWallet, [id]: parseFloat(value) };
    this.setState({ myWallet });
  }

  setFocusedInput = (inputId) => {
    this.setState({ focusedInput: inputId });
  };

  getSelectedInvestmentRetirementData() {
    return this.state.retirementResults[0][1];
  }

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
            <TipsContainer
              handleStudyCaseInput={this.handleStudyCaseInput}
              handleStudyCaseWallet={this.handleStudyCaseWallet}
              myInvestments={this.state.myInvestments}
              studyCases={this.state.studyCases}
              retirementResults={this.state.retirementResults}
              studyCasesResults={this.state.studyCasesResults}
              currentRetirementAge={this.getSelectedInvestmentRetirementData().retirement.age}
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
              handleCheckbox={this.handleCheckbox}
              handleWalletInput={this.handleWalletInput}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Index;
