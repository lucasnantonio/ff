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
      // myCurrentIncome: 10000,
      // myCurrentLifestyleCost: 3000,
      isShowingIntro: true,
      isShowingCalculation: false,
      myCurrentBalance: 5000,
      myCurrentAge: 24,
      myCurrentMonthlySavings: 500,
      myRetirementIncome: 10000,
      myLifeExpectancy: 100,
      myInvestments: [
        {
          label: 'poupança',
          rate: 3,
          isSelected: false,
        },
        {
          label: 'renda fixa',
          rate: 6,
          isSelected: false,
        },
        {
          label: 'renda variável',
          rate: 8.5,
          isSelected: false,
        },
      ],
      lifeEvents: [
        {
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
    const { state } = this;
    if (floatValue && maskedValue) { // if is currencyInput
      state[e.target.id] = floatValue;
      this.setState(state);
    } else if (e.target.type !== undefined && e.target.dataset.type !== 'rate') { // if user is typing inside input, not using buttons
      state[e.target.id] = e.target.value;
      this.setState(state);
    } else if (e.target.dataset.type === 'rate') { // check if is investment rate input
      state.myInvestments.filter(item => item.label === e.target.id)[0].rate = e.target.value;
    } else { // if user is using buttons
      state[e.target.parentNode.parentNode.querySelectorAll('input')[0].id] = e.target.parentNode.parentNode.querySelectorAll('input')[0].value;
      this.setState(state);
    }

    this.updateChart();
  }

  handleInvestmentSelector = (e, index) => {
    const investmentsState = this.state.myInvestments;
    const ressetedInvestment = investmentsState.map((item, itemIndex) => ({
      ...item,
      isSelected: index === itemIndex,
    }));
    this.setState({ myInvestments: ressetedInvestment });
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
            <Intro isShowing={this.state.isShowingIntro} />
            <div id="bottomWrapper"
              className={`
                bg-white flex z-max 
                ${this.state.isShowingIntro ? 'h5' : ''} 
                ${this.state.isShowingCalculation ? 'overflow-scroll' : 'overflow-hidden'}`}>
              <div id="formWrapper" className="flex flex-column w-100 pl5 pr5 h-100">
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
                  handleInvestmentSelector = {this.handleInvestmentSelector}
                  />
              </div>
              <div id="resultsWrapper"
                  className={`flex flex-column w-100 center items-center  justify-center relative h-100
                    ${this.state.isShowingIntro ? 'bg-white' : 'bg-near-white'}
                    ${!this.state.isShowingIntro && this.state.isShowingCalculation ? 'pb6' : ''}
                  `}>
                {this.state.isShowingIntro
                  && <Button isEnabled={true} label='começar'onClick={this.startApp} />
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
              input{outline:none; caret-color: #2ea776; caret-width: 2px}
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
