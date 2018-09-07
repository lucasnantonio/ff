import InputContainer from "../components/inputContainer";
import OutPutContainer from "../components/outPutContainer";
import Header from "../components/header";
import React, { Component } from 'react'
import { toCurrency, getRetirementResults } from '../utils/math'
import { isNumber } from '../utils/input'
// import Tachyons from 'tachyons'

class Index extends Component {


     constructor(props) {
        super(props);
        this.state = {
            myCurrentIncome: 10000,
            myCurrentBalance: 100000,
            myCurrentAge: 27,
            myCurrentMonthlySavings: 1500,
            myCurrentLifestyleCost: 3000,
            myRetirementAge: 0,
            myAnnualInterestRate: 0.08,
            myRetirementIncome: 10000,
            myLifeExpectancy: 100,
            myInvestiments: [
              {
                label: 'poupança',
                rate: 0.030
              },
              {
                label: 'renda fixa',
                rate: 0.060
              },
              {
                label: 'renda variável',
                rate: 0.085
              }
            ],
            lifeEvents: [
              {
                label: 'viagem',
                age: 30 * 12,
                cost: 100000
              },
            ],
            retirementResults: false,
         }
         this.handleInput = this.handleInput.bind(this);
         this.handleTableInput = this.handleTableInput.bind(this);
         this.handleAddTableRow = this.handleAddTableRow.bind(this);
         this.handleRemoveTableRow = this.handleRemoveTableRow.bind(this);
        //  this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleInput (e) {

        // update state for every input field
        let state = this.state
        if (e.target.type){
            state[e.target.id] = e.target.value
            this.setState(state)
        } else {
            state[e.target.parentNode.parentNode.querySelectorAll('input')[0].id] = e.target.parentNode.parentNode.querySelectorAll('input')[0].value
            this.setState(state)
        }

        // calculate retirement age
        this.setState({retirementResults : getRetirementResults(this.state)})
    }

    handleTableInput = (idx, tableName, table, textField = false) => event => {

      const value = event.target.value;
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
        this.setState({ [tableName]: updatedTable });
        this.setState({retirementResults : getRetirementResults(
          {...this.state,
          [tableName] : updatedTable}
        )}) // fix goHorse
      }
    };

    handleAddTableRow = (tableName, fields) => () => {

      this.setState({
        [tableName]: [...this.state[tableName], fields],
      });
    };

    handleRemoveTableRow = (idx, tableName, table) => () => {

      this.setState({
        [tableName]: table.filter((p, pidx) => idx !== pidx),
      });
    };

    render() {
        return (
        <div>
            <Header />
            <div className="flex w-100 vh-100 bg-light-pink dark-blue">
                <InputContainer {...this.state}
                    handleInput = {this.handleInput}
                    handleTableInput = {this.handleTableInput}
                    handleAddTableRow = {this.handleAddTableRow}
                    handleRemoveTableRow = {this.handleRemoveTableRow}
                />
                <OutPutContainer {...this.state}/>
            </div>
            <style jsx>{
                `.bg-light-pink{background-color: #fee0e0}
                .dark-blue{color: #0148B3}
                `
            }</style>
        </div> );
    }
}

export default Index;
