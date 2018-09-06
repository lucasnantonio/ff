import InputContainer from "../components/inputContainer";
import OutPutContainer from "../components/outPutContainer";
import Header from "../components/header";
import React, { Component } from 'react'
// import Tachyons from 'tachyons'

class Index extends Component {


     constructor(props) {
        super(props);
        this.state = { 
            myIncome: 2000 
         }
         this.handleIncomeChange = this.handleIncomeChange.bind(this);
    }

    handleIncomeChange (inputValue) {
        this.setState({myIncome : inputValue})
    }

    render() { 
        return (
        <div>
            <Header />
            <div className="flex w-100 vh-100">
                <InputContainer {...this.state} 
                    handleIncomeChange = {this.handleIncomeChange}/>
                <OutPutContainer {...this.state}/>
            </div>
        </div> );
    }
}

export default Index;
