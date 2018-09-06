import InputContainer from "../components/inputContainer";
import OutPutContainer from "../components/outPutContainer";
import Header from "../components/header";
import React, { Component } from 'react'
// import Tachyons from 'tachyons'

class Index extends Component {
    state = {  }
    render() { 
        return (
        <div>
            <Header />
            <div className="flex w-100 vh-100">
                <InputContainer/>
                <OutPutContainer />
            </div>
        </div> );
    }
}

export default Index;
