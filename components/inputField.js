import React, { Component } from 'react';

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isFocused : false,
            isEmpty : true,
         };
        this.handleInput = this.handleInput.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    handleInput (e) {
        this.props.handleInput(e);
    }

    handleFocus = () =>
        this.setState({
            isFocused : true
        })
    
    handleBlur (e) {
        if (e.target.value.length != 0){
            console.log(e.target.value.length)
            this.setState({
                isEmpty : false,
                isFocused : true
            })
        } else {
        this.setState({
            isFocused : false,
            isEmpty : true
        })
    }
    }

    render() { 
        return (
            <div className={`flex justify-between f4 pv4 ${this.state.isFocused ? "o-100" : "o-50"}`}>
                <div className="flex justify-start">
                    <div className={`checkmark bg-green br-pill mr3 mt1 ${this.state.isEmpty ? "w0 h0 mr0" : "w1 h1 mr2"}`}></div>
                    <label className="gray">{this.props.label}</label>
                </div>
                <div className={`bb w3 ${this.state.isFocused ? "b--red" : "b--gray"}`}>
                    <input
                        onFocus= {this.handleFocus}
                        onBlur= {this.handleBlur}
                        className="bn bg-transparent f3"
                        id={this.props.id}
                        type="number" 
                        placeholder={this.props.placeholder}
                        onChange={this.handleInput} >
                    </input>
                </div>
                <style jsx>{`
                    input{outline:none}
                    .checkmark{
                        transition: all .2s;
                    }
                `}</style>
            </div>
         );
    }
}
 
export default InputField;