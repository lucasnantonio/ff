import React, { Component } from 'react';
import Logo from './Logo';
import NavBar from './Navbar';
import IntroQuestion from './IntroQuestion';
import CoinParticles from './CoinParticles';

class Intro extends Component {
  state = {
    isShowingParticles: false,
  };

  componentDidMount() {
    this.setState({ isShowingParticles: true });
  }

  render() {
    return (
      <div id="intro" className={'vh-100 w-100 bg-offwhite flex flex-column'}>
        <NavBar />
        <div className="flex flex-column center justify-center items-center h-100">
          <div className="mb2 mw7 w-50">
            <Logo />
          </div>
          <h2 className="f2 fw1 measure-narrow gray tc">Calcule sua independência financeira</h2>
          <h3 className="f5 measure-narrow gray mb5 tc">
            Descubra quando você vai poder mandar tudo à merda!
          </h3>
        </div>
        <IntroQuestion
          startApp={this.props.startApp}
          handleAgeInput={this.props.handleAgeInput}
          handleInputButtons={this.props.handleInputButtons}
          myCurrentAge={this.props.myCurrentAge}
          isShowingCalculation={this.props.isShowingCalculation}
        />
        {/* {this.state.isShowingParticles
        &&
        <CoinParticles/>
      } */}
        <style jsx>
          {`
            .h0 {
              height: 0;
            }
            .bg-offwhite {
              background-color: #f8f4ef;
            }
            #intro {
              transition: all 0.5s;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Intro;
