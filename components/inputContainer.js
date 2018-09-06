import { Component } from "react";

class InputContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    handleInput = (e) =>
        this.props.handleIncomeChange(e.target.value)

    render() { 
        return ( 
            <div className="w-100 bg-near-white">
                Input Container
                <input type="text" placeholder="hello" onChange={this.handleInput} ></input>
            </div>
         );
    }
}

export default InputContainer;