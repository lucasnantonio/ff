import React, { Component } from 'react';

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleInput = (e) =>
        this.props.handleIncomeChange(e.target.value)


    render() { 
        return ( 
            <input type="text" 
                placeholder="hello" 
                onChange={this.handleInput} >
            </input>
         );
    }
}
 
export default InputField;