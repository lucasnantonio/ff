import React, { Component } from 'react';
import InputField from './InputField'

class Intro extends Component {
    state = { }

    render() {
      return (
            <div className="vh-100 w-100 flex flex-column justify-between center items-center bg-offwhite tc">
                <div className="flex flex-column items-center justify-center w-100 h-100">
                    <h1 className="b f2 lh-solid">Quero Me  <br />Aposentar</h1>
                    <h2 className="f3 fw1 measure-narrow">Calcule sua independência financeira</h2>
                    <h3 className="f4 measure-narrow gray mb5">Descubra quando você vai poder mandar tudo à merda!</h3>
                </div>
                <div className="bg-white ph7 pv4 w-100 flex justify-between items-center">
                    <InputField
                        hasSteppers='true'
                        isCurrency='false'
                        placeholder='25'
                        label="Quantos anos você tem?"
                    />
                    <button onClick={this.props.handleClick} className="bg-green white b bn pointer ph5 h3">COMEÇAR</button>
                </div>
            <style jsx>
                {'.bg-offwhite{background-color: #f8f4ef;}'}
            </style>
            </div>
      );
    }
}

export default Intro;
