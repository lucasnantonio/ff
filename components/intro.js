import React, { Component } from 'react';

class Intro extends Component {
    state = { }

    render() {
      return (
            <div className="vh-100 flex flex-column justify-center center bg-offwhite tc">
                <div className="center tc flex flex-column justify-center items-center">
                    <h1 className="b f1 lh-solid">Quero Me  <br />Aposentar</h1>
                    <h2 className="f2 fw1 measure-narrow">Calcule sua independência financeira</h2>
                    <h3 className="f4 measure-narrow gray mb5">Descubra quando você vai poder mandar tudo à merda!</h3>
                    <button onClick={this.props.handleClick} className="pa4 bg-green white b bn w5 grow pointer">COMEÇAR</button>
                </div>
                <style jsx>
                {'.bg-offwhite{background-color: #f8f4ef;}'}
            </style>
            </div>
      );
    }
}

export default Intro;
