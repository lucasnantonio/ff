import React, { Component } from 'react';

class Intro extends Component {
    state = { }

    render() {
      return (
            <div className="vh-100 flex flex-column justify-center">
                <h1 className="f1 b measure-narrow">Calcule sua independência financeira</h1>
                <h2 className="f4 measure-narrow gray mb5">Descubra quando você vai poder mandar tudo à merda!</h2>
                <button onClick={this.props.handleClick} className="pa4 bg-red white b bn w5 grow pointer">COMEÇAR</button>
            </div>
      );
    }
}

export default Intro;
