import React, { Component } from 'react';

class Intro extends Component {
    state = { }

    render() {
      return (
            <div className="vh-100 w-100 flex flex-column justify-between center items-center bg-offwhite tc">
                <div className="flex flex-column items-center justify-center w-100 h-100">
                    <h1 className="b f2 lh-solid">Quero Me  <br />Aposentar</h1>
                    <h2 className="f3 fw1 measure-narrow">Calcule sua independência financeira</h2>
                    <h3 className="f4 measure-narrow gray mb5">Descubra quando você vai poder mandar tudo à merda!</h3>
                    <button onClick={this.props.handleClick} className="pa4 bg-green white b bn w5 pointer">COMEÇAR</button>
                </div>
                <div className="bg-white ph6 pv4 w-100">ahahaha</div>
            <style jsx>
                {'.bg-offwhite{background-color: #f8f4ef;}'}
            </style>
            </div>
      );
    }
}

export default Intro;
