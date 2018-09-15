import React, { Component } from 'react';
import InputContainer from '../components/InputContainer';
import OutPutContainer from '../components/OutPutContainer';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Button from '../components/Button';
import { getRetirementResults } from '../utils/math';
import { isNumber } from '../utils/input';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingIntro: true,
      isShowingCalculation: false,
      myCurrentIncome: 10000,
      myCurrentBalance: 100000,
      myCurrentAge: 26,
      myCurrentMonthlySavings: 1500,
      myCurrentLifestyleCost: 3000,
      myRetirementAge: 0,
      myAnnualInterestRate: 0.08,
      myRetirementIncome: 10000,
      myLifeExpectancy: 100,
      myInvestments: [
        {
          label: 'poupança',
          rate: 0.030,
          isSelected: false,
        },
        {
          label: 'renda fixa',
          rate: 0.060,
          isSelected: false,
        },
        {
          label: 'renda variável',
          rate: 0.085,
          isSelected: false,
        },
      ],
      lifeEvents: [
        {
          label: 'viagem',
          age: 30, // years, not months
          cost: 100000,
        },
      ],
      retirementResults: false,
    };
  }

  updateChart = () => {
    this.setState({ retirementResults: getRetirementResults(this.state) });
  }

  startApp = () => {
    this.setState({ isShowingIntro: false });
    // calculate retirement age
    this.updateChart();
  }

  showFirstCalculation = () => {
    this.setState({ isShowingCalculation: true });
    this.updateChart();
  }

  handleBack = () => {
    this.setState({ isShowingCalculation: false, isShowingIntro: true });
  }

  handleInput = (e, floatValue, maskedValue) => {
    // save state in a variable
    const { state } = this;

    // check if is special currencyInput
    if (floatValue && maskedValue) {
      state[e.target.id] = floatValue;
      this.setState(state);
    } else if (e.target.type) {
      // update state for every input field
      state[e.target.id] = e.target.value;
      this.setState(state);
    } else {
      state[e.target.parentNode.parentNode.querySelectorAll('input')[0].id] = e.target.parentNode.parentNode.querySelectorAll('input')[0].value;
      this.setState(state);
    }

    this.updateChart();
  }

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
        retirementResults: getRetirementResults(
          { ...prevState, [tableName]: updatedTable },
        ),
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
      retirementResults: getRetirementResults(
        { ...prevState, [tableName]: updatedTable },
      ),
    }));
  };

  render() {
    return (
      <div>
          <Header />
          <div id="pageWrapper" className='a vh-100 flex flex-column overflow-hidden'>
            <Intro isShowing={this.state.isShowingIntro}/>
            <div id="bottomWrapper" className={`bg-white flex z-max ${this.state.isShowingIntro ? 'overflow-hidden h5' : 'overflow-hidden vh-100'} ${this.state.isShowingCalculation ? 'overflow-scroll' : ''}`}>
              <div id="formWrapper" className="flex flex-column w-100 pl6 pr5 h-100">
              <InputContainer
                  {...this.state}
                  handleBack = {this.handleBack}
                  isShowingCalculation = {this.state.isShowingCalculation}
                  isExpanded = {!this.state.isShowingIntro}
                  handleStartApp = {this.startApp}
                  handleShowCalculation = {this.showFirstCalculation}
                  handleInput = {this.handleInput}
                  handleTableInput = {this.handleTableInput}
                  handleAddTableRow = {this.handleAddTableRow}
                  handleRemoveTableRow = {this.handleRemoveTableRow}
                  />
              </div>
              <div id="resultsWrapper"
                  className={`flex flex-column w-100 center items-center  justify-center relative h-100
                    ${this.state.isShowingIntro ? 'bg-white' : 'bg-near-white'}
                  `}>
                {this.state.isShowingIntro
                  && <Button label='começar'onClick={this.startApp} />
                }
                {this.state.isShowingCalculation
                && <div className={`${this.state.isShowingCalculation ? 'flex flex-column w-100 h-100' : 'dn'}`}>
                  <OutPutContainer onComponentDidMount={this.updateChart} {...this.state}/>
                </div>
                }
              </div>
            </div>
          </div>
          <style jsx global>{`
            ::selection{
              color:white;
              background-color:#2ea776;
            }
                .noSelect {
                  -webkit-touch-callout: none;
                  -webkit-user-select: none;
                  -khtml-user-select: none;
                  -moz-user-select: none;
                  -ms-user-select: none;
                  user-select: none;
              }
              .showing{
                opacity: 1;
              }
              .hidden{
                opacity: 0; 
              }
              .absolute-bottom{
                bottom:4rem;
                right: 0;
              }
              .absolute-top{
                right: 0;
                top: 4rem;
              }
              .mt-negative{
                margin-top: -5rem;
              }
              input{outline:none}
              .checkmark{
                  transition: all .2s;
              }
              input::-webkit-outer-spin-button,
              input::-webkit-inner-spin-button {
                  /* display: none; <- Crashes Chrome on hover */
                  -webkit-appearance: none;
                  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
              }
              #bottomWrapper{
                transition: height .55s ease-in-out, width .55s ease-in-out;
              }
          `}</style>
      </div>);
  }
}

export default Index;
