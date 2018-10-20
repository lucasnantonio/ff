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
        className={`${
          this.props.isShowingIntro ? 'h-100' : 'h4 overflow-hidden'
        } w-100 bg-green flex flex-column justify-center`}
      >
        <div className="flex flex-column h-100 ph5-ns ph4 justify-center">
          <div>
            <Logo
              onClick={this.props.handleBack}
              size={this.props.isShowingIntro ? 'big' : 'small'}
            />
          </div>
          <h3
            className={`${
              this.props.isShowingIntro ? 'flex' : 'dn'
            } f4 measure-narrow white mb5 fw3`}
          >
            Descubra quando você vai poder mandar tudo à merda!
          </h3>
        </div>
        <IntroQuestion
          isShowingIntro={this.props.isShowingIntro}
          startApp={this.props.startApp}
          handleInput={this.props.handleInput}
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
