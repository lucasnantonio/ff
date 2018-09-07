import InputContainer from "../components/inputContainer";
import OutPutContainer from "../components/outPutContainer";
import Header from "../components/header";
import React, { Component } from 'react'
import { toCurrency, calculateRetirementAge } from '../utils/math'
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
         }
         this.handleInput = this.handleInput.bind(this);
    }

    handleInput (e) {
        // update state for every input field
        let state = this.state
        state[e.target.id] = e.target.value
        this.setState(state)
        // calculate retirement age
        this.setState({myRetirementAge : calculateRetirementAge(this.state)})
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
