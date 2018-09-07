import InputContainer from "../components/inputContainer";
import OutPutContainer from "../components/outPutContainer";
import Header from "../components/header";
import React, { Component } from 'react'
import { toCurrency, getMyRetirementAge, getRetirementChart } from '../utils/math'
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
            ]
         }
         this.handleInput = this.handleInput.bind(this);
        //  this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleInput (e) {

        // update state for every input field
        let state = this.state
        if (e.target.type){
            state[e.target.id] = e.target.value
            this.setState(state)
        } else {
            state[e.target.parentNode.querySelectorAll('input')[0].id] = e.target.parentNode.querySelectorAll('input')[0].value
            this.setState(state)
        }

        // calculate retirement age
        this.setState({myRetirementAge : getMyRetirementAge(this.state)})
    }

    render() {
        return (
        <div>
            <Header />
            <div className="flex w-100 vh-100 bg-light-pink dark-blue">
                <InputContainer {...this.state}
                    handleInput = {this.handleInput}/>
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
