import React, { Component } from 'react';
import InputContainer from './inputContainer';
import InputHelper from './inputHelper'
import MinusBtn from './minusBtn'
import PlusBtn from './plusBtn'

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
        let input = e.target.parentElement.parentElement.querySelectorAll('input')[0]
        input.stepUp()
        input.focus()
        this.handleInput(e)
    }

    handleDecrement (e){
        let input = e.target.parentElement.parentElement.querySelectorAll('input')[0]
        input.stepDown()
        input.focus()
        this.handleInput(e)
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
            <div className="flex flex-column">
                <div className={`flex justify-between f4 pv4 ${this.state.isFocused ? "o-100" : "o-50"}`}>
                    <div className="flex justify-start self-start w-70">
                        <label className="gray mw5">{this.props.label}</label>
                    </div>
                    <div className={`flex w-30`}>
                        {this.props.hasSteppers && 
                            <div className="pointer" onClick={this.handleDecrement}>
                            <MinusBtn />
                            </div>
                        }
                        <div className={`bb w-100 flex flex-column justify-center ${this.state.isFocused ? "b--red" : "b--gray"}`}>
                        <input
                            className="bn w-100 bg-transparent f3 tc"
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
                             <div className="pointer" onClick={this.handleIncrement}>
                             <PlusBtn />
                             </div>
                        }
                    </div>
                </div>
                {/* <InputHelper isEmpty={this.state.isEmpty} helperText={this.props.helperText}/> */}
                <style jsx>{`
                    input{outline:none}
                    .checkmark{
                        transition: all .2s;
                    }
                    input::-webkit-outer-spin-button,
                    input::-webkit-inner-spin-button {
                        /* display: none; <- Crashes Chrome on hover */
                        -webkit-appearance: none;
                        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
                    }
                `}</style>
            </div>

         );
    }
}
 
export default InputField;