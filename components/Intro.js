import React, { Component } from 'react';
import Logo from './Logo';
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
      <div
        id="intro"
        className={`${this.props.isShowingIntro ? 'vh-100' : 'h0'} w-100 bg-green flex flex-column`}
      >
        <div className="flex flex-column h-100 ph5 justify-center mt5">
          <div className="mb2 mw7 w-50">
            <Logo />
          </div>
          <h3 className="f4 measure-narrow white mb5 fw3">
            Descubra quando você vai poder mandar tudo à merda!
          </h3>
        </div>
        <IntroQuestion
          isShowingIntro={this.props.isShowingIntro}
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
              background-color: rgba(244, 244, 244, 1);
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
