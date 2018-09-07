import React, { Component } from 'react';
import InputContainer from './inputContainer';

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
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
    }

    handleInput (e) {
        this.props.handleInput(e);
    }

    handleFocus () {
        this.setState({
            isFocused : true
        })
    }
    
    handleIncrement (e){
        let input = e.target.parentElement.querySelectorAll('input')[0]
        input.stepUp()
        this.handleInput(e)
    }

    handleDecrement (e){
        let input = e.target.parentElement.querySelectorAll('input')[0]
        input.stepDown()
    }

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
                <div className="flex justify-start self-start">
                    <div className={`checkmark bg-green br-pill mr3 mt1 ${this.state.isEmpty ? "w0 h0 mr0" : "w1 h1 mr2"}`}></div>
                    <label className="gray mw5">{this.props.label}</label>
                </div>
                <div className={`flex w5`}>
                    {this.props.hasSteppers && 
                        <div onClick={this.handleDecrement} className=" mh2 w2 b h2 br-pill ba bw1 tc center pa1 pointer">-</div>
                    }
                    <div className={`bb ${this.state.isFocused ? "b--red" : "b--gray"}`}>
                    <input
                        className="bn bg-transparent f3 mw3"
                        min={this.props.min}
                        max={this.props.max}
                        onFocus= {this.handleFocus}
                        onBlur= {this.handleBlur}
                        id={this.props.id}
                        type="number" 
                        placeholder={this.props.placeholder}
                        onChange={this.handleInput} >
                    </input>
                    </div>
                    {this.props.hasSteppers && 
                        <div onClick={this.handleIncrement} data-name="incrementBtn" className=" mh2 w2 h2 br-pill ba bw1 b tc center pa1 pointer">+</div>
                    }
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