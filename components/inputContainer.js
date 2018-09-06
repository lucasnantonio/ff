import { Component } from "react";
import InputField from '../components/inputField'

class InputContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() { 
        return ( 
            <div className="w-100 bg-near-white">
            <InputField 
                handleIncomeChange = {this.props.handleIncomeChange}
            />
            <InputField 
                handleIncomeChange = {this.props.handleIncomeChange}
            />
            </div>
         );
    }
}

export default InputContainer;