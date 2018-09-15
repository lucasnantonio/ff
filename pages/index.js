import React, { Component } from 'react';
import InputContainer from '../components/InputContainer';
import OutPutContainer from '../components/OutPutContainer';
import Header from '../components/Header';
import { getRetirementResults } from '../utils/math';
import { isNumber } from '../utils/input';
import Intro from '../components/Intro';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingIntro: true,
      myCurrentIncome: 10000,
      myCurrentBalance: 100000,
      myCurrentAge: 26,
      myCurrentMonthlySavings: 1500,
      myCurrentLifestyleCost: 3000,
      myRetirementAge: 0,
      myAnnualInterestRate: 0.08,
      myRetirementIncome: 10000,
      myLifeExpectancy: 100,
      myInvestiments: [
        {
          label: 'poupança',
          rate: 0.030,
        },
        {
          label: 'renda fixa',
          rate: 0.060,
        },
        {
          label: 'renda variável',
          rate: 0.085,
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

  startApp = () => {
    this.setState({ isShowingIntro: false });
  }

  handleInput = (e, floatValue, maskedValue) => {
    // remove picture on first edit
    document.getElementById('chartContainer').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

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


    // calculate retirement age
    this.setState({ retirementResults: getRetirementResults(this.state) });
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
          <div className='vh-100 flex flex-column overflow-hidden'>
            <Intro isShowing={this.state.isShowingIntro}/>
            <div className={`bg-white ph7 ${this.state.isShowingIntro ? 'overflow-hidden' : ''}`}>
              <InputContainer {...this.state}
                  handleStartApp = {this.startApp}
                  handleInput = {this.handleInput}
                  handleTableInput = {this.handleTableInput}
                  handleAddTableRow = {this.handleAddTableRow}
                  handleRemoveTableRow = {this.handleRemoveTableRow}
                  />
            </div>
          </div>
          <div className='dn'>
            <OutPutContainer {...this.state}/>
          </div>
          <style jsx global>{`
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
          `}</style>
      </div>);
  }
}

export default Index;
