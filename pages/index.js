import React, { Component } from 'react';
import { hotjar } from 'react-hotjar';
import { initGA, logPageView, logEvent } from '../utils/analytics';
import Questions from '../components/Questions';
import Answer from '../components/Answer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import RetirementSummaryFloating from '../components/RetirementSummaryFloating';
import TipsContainer from '../components/TipsContainer';
import NavBar from '../components/NavBar';
import colors from '../components/Colors';
import { getRetirementResults, getStudyCasesResults } from '../utils/math';
import { isNumber, valueByInputType } from '../utils/input';
import { getObjectByLabel } from '../utils/utils';

function getRates(label) {
  return {
    poupança: 1.5,
    'renda fixa': 4.5,
    'renda variável': 7.0,
  }[label];
}

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingAnswer: false,
      isShowingQuestions: false,
      isShowingTips: false,
      myCurrentBalance: 0,
      myCurrentAge: 18,
      myCurrentMonthlySavings: 100,
      myRetirementIncome: 0,
      myLifeExpectancy: 100,
      annualSavingsIncreaseRate: 0,
      selectedInvestment: false,
      leaveHeritage: false,
      myWallet: [
        {
          label: 'poupança',
          allocation: 0,
        },
        {
          label: 'renda fixa',
          allocation: 0,
        },
        {
          label: 'renda variável',
          allocation: 0,
        },
      ],
      myInvestments: [
        {
          label: 'poupança',
          rate: getRates('poupança'),
          isSelected: false,
          isWallet: false,
        },
        {
          label: 'renda fixa',
          rate: getRates('renda fixa'),
          isSelected: false,
          isWallet: false,
        },
        {
          label: 'renda variável',
          rate: getRates('renda variável'),
          isSelected: false,
          isWallet: false,
        },
        {
          // just a placeholder, not a real investment
          label: 'carteira mista',
          isSelected: false,
          isWallet: true,
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
      lifeEvents: [{
        label: '',
        age: 0,
        cost: '0',
      }],
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

  startApp = () => {
    this.setState({ isShowingQuestions: true });
    logEvent('User', 'clicked start');
  };

  resetApp = () => {
    this.setState({
      isShowingAnswer: false,
      isShowingQuestions: false,
      selectedInvestment: false,
    });
  };

  assembleStudyCases() {
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
  }

  handleShowAnswer = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    this.setState({ isShowingAnswer: true });
    this.assembleStudyCases();
    logEvent('User', 'clicked calculate');
  };

  handleBack = () => {
    this.setState({ isShowingAnswer: false, isShowingIntro: true });
  };

  handleInput = (e, value) => {
    const { id } = e.target;
    this.setState({ [id]: value === '' ? 0 : parseFloat(value) });
  };

  handleInputButtons = (e) => {
    const parentNode = e.target.parentNode.parentNode.querySelectorAll('input')[0];
    const parentId = parentNode.id;
    const parentValue = parentNode.value;
    this.setState({ [parentId]: parseFloat(parentValue) });
  };

  handleStudyCaseInput = (e, floatValue, studyCaseLabel) => {
    const {
      id, type, checked, value,
    } = e.target;

    const studyCases = this.state.studyCases.map((item) => {
      if (item.label === studyCaseLabel || (item.label === 'optimized' && id in item)) {
        // optimized case will mirror the other study cases values
        return {
          ...item,
          [id]: valueByInputType(type, floatValue, value, checked),
        };
      }
      return item;
    });

    this.setState({ studyCases });
  };

  handleStudyCaseWallet = (e, floatValue, studyCaseLabel) => {
    const { id } = e.target;
    const studyCases = this.state.studyCases.map((item) => {
      if (item.label === studyCaseLabel || (item.label === 'optimized' && 'myWallet' in item)) {
        const myWallet = item.myWallet.map((elem) => {
          if (elem.label === id) {
            return {
              ...elem,
              allocation: parseFloat(floatValue),
            };
          }
          return elem;
        });
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
    const myInvestments = this.state.myInvestments.map((item) => {
      if (item.label === id) {
        return {
          ...item,
          rate: value,
        };
      }
      return item;
    });
    this.setState({ myInvestments });
  };

  assembleMyWallet(selectedInvestmentLabel) {
    // if some investment option is selected, allocate 100% in that investment
    // and 0 % for the others
    const myWallet = this.state.myWallet.map(item => (
      {
        ...item,
        allocation: item.label === selectedInvestmentLabel ? 100 : 0,
      }
    ));

    this.setState({ myWallet });
  }

  handleInvestmentSelector = (e, index) => {
    const investmentsState = this.state.myInvestments;
    const myInvestments = investmentsState.map((item, itemIndex) => ({
      ...item,
      isSelected: index === itemIndex,
    }));

    this.assembleMyWallet(myInvestments[index].label);

    this.setState({
      myInvestments,
      selectedInvestment: true,
    });

    const investmentTip = document.getElementById('investmentTip');
    if (investmentTip) {
      investmentTip.scrollIntoView({ behavior: 'smooth' });
    }

    logEvent('User', 'Selected Investment');
  };

  handleResetRates = () => {
    const myInvestments = this.state.myInvestments.map(investment => ({
      ...investment,
      rate: getRates(investment.label),
    }));

    this.setState({ myInvestments });
    logEvent('User', 'clicked reset taxas');
  };

  handleWalletInput = (e, floatValue) => {
    const { id } = e.target;
    const value = floatValue === '' ? 0 : parseFloat(floatValue);

    const myWallet = this.state.myWallet.map((item) => {
      if (item.label === id) {
        return {
          ...item,
          allocation: value,
        };
      }
      return item;
    });


    this.setState({ myWallet });
  }

  setFocusedInput = (inputId) => {
    this.setState({ focusedInput: inputId });
  };

  handleTableInput = (e, value, idx, tableName, table, textField = false) => {
    const field = e.target.id;

    if (isNumber(value) || textField) {
      const updatedTable = table.map((row, pidx) => {
        if (idx === pidx) {
          return {
            ...row,
            [field]: textField ? value : parseFloat(value),
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

  handleShowTips = (value) => {
    this.setState({ isShowingTips: value });
  }

  handleApplyTips = (doApply) => {
    if (doApply) {
      const optimizedCase = getObjectByLabel(this.state.studyCases, 'optimized');
      const updatedInputs = { ...optimizedCase };
      delete updatedInputs.label;
      this.setState(updatedInputs);
    }
    this.setState({ isShowingTips: false });
  }

  render() {
    return (
      <div id="pageWrapper" className="center vh-100">
        <Header title="Aposentar.me" />
        <NavBar isShowingAnswer={this.state.isShowingAnswer} />

        {this.state.isShowingAnswer
          && <RetirementSummaryFloating
            retirementResults={this.state.retirementResults}
            myInvestments={this.state.myInvestments}
          />
        }

        {!this.state.isShowingAnswer ? (
          <Hero startApp={this.startApp} isShowingQuestions={this.state.isShowingQuestions} />
        ) : (
          <div
            className="flex"
            style={{
              transform: `translateX(${this.state.isShowingTips ? '-100%' : '0'})`,
              transition: 'transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955',
            }}
          >
            <Answer
              key="answer"
              {...this.state}
              handleShowTips={this.handleShowTips}
            />
            <TipsContainer
              key="tips"
              handleStudyCaseInput={this.handleStudyCaseInput}
              handleStudyCaseWallet={this.handleStudyCaseWallet}
              myInvestments={this.state.myInvestments}
              studyCases={this.state.studyCases}
              retirementResults={this.state.retirementResults}
              studyCasesResults={this.state.studyCasesResults}
              currentRetirementAge={this.state.retirementResults[0][1].retirement.age}
              handleShowTips={this.handleShowTips}
              handleApplyTips={this.handleApplyTips}
            />
          </div>
        )
        }

        {!this.state.isShowingTips
          && <div
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
                handleWalletInput={this.handleWalletInput}
              />
            )}
          </div>
        }
      </div>
    );
  }
}

export default Index;
