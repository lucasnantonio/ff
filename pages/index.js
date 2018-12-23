import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { initGA, logPageView, logEvent } from '../utils/analytics';
import Questions from '../components/Questions';
import OutPutContainer from '../components/OutPutContainer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Pig from '../components/Pig';
import { getRetirementResults } from '../utils/math';
import { isNumber } from '../utils/input';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingIntro: true,
      isShowingCalculation: false,
      myCurrentBalance: 0,
      myCurrentAge: 18,
      myCurrentMonthlySavings: 0,
      myRetirementIncome: 0,
      myLifeExpectancy: 100,
      annualSavingsIncreaseRate: 1,
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

  startApp = () => {
    this.setState({ isShowingIntro: false });
    logEvent('User', 'clicked start');
  };

  showFirstCalculation = () => {
    this.setState({ isShowingCalculation: true });
  };

  handleBack = () => {
    this.setState({ isShowingCalculation: false, isShowingIntro: true });
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
    this.setState({ myInvestments: ressetedInvestment, isShowingCalculation: true });

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
      poupança: 3,
      'renda fixa': 6,
      'renda variável': 8.5,
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
      <div id="pageWrapper" className="mw8-ns ph0-l ph4 center vh-100">
        <Header />
        <Hero />
        <Questions
          {...this.state}
          isShowingCalculation={this.state.isShowingCalculation}
          handleStartApp={this.startApp}
          handleShowCalculation={this.showFirstCalculation}
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
        <style jsx global>{`
          ::-webkit-scrollbar {
            width: 0px; /* remove scrollbar space */
            background: transparent; /* optional: just make scrollbar invisible */
          }
          .r0 {
            right: 0;
          }
          .h0 {
            height: 0;
          }
          ::selection {
            color: white;
            background-color: #fbadaf;
            opacity: 1;
          }
          .noSelect {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .showing {
            opacity: 1;
          }
          .hidden {
            opacity: 0;
          }
          .absolute-bottom {
            bottom: 4rem;
            right: 0;
          }
          .absolute-top {
            right: 0;
            top: 4rem;
          }
          .mt-negative {
            margin-top: -5rem;
          }
          input {
            outline: none;
            caret-color: #2ea776;
            caret-width: 2px;
          }
          .checkmark {
            transition: all 0.2s;
          }
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            /* display: none; <- Crashes Chrome on hover */
            -webkit-appearance: none;
            margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
          }
        `}</style>
      </div>
    );
  }
}

export default Index;
