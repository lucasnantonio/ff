import React, { Component } from 'react';

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput = (e) =>
        this.props.handleInput(e)

    render() { 
        return (
            <div className="flex justify-between f3 pv4">
                <label>{this.props.label}</label>
                <input 
                    className="bn bg-white f3"
                    id={this.props.id}
                    type="number" 
                    placeholder={this.props.placeholder}
                    onChange={this.handleInput} >
                </input>
            </div>
         );
    }
}
 
export default InputField;