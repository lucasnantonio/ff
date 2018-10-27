import React, { Component } from 'react';
import Logo from './Logo';
import IntroQuestion from './IntroQuestion';
import CoinParticles from './CoinParticles';
import PigAnimated from './PigAnimated';

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
          this.props.isShowingIntro ? 'vh-100' : 'h4 overflow-hidden'
        } w-100 bg-green flex flex-column justify-center`}
      >
        <div
          id="hero"
          className="flex flex-column h-100 ph5-ns ph4 justify-center relative overflow-hidden"
        >
          <div className="z-max">
            <Logo
              onClick={this.props.handleBack}
              size={this.props.isShowingIntro ? 'big' : 'small'}
            />
          </div>
          <h3
            className={`${
              this.props.isShowingIntro ? 'flex' : 'dn'
            } f3-l f4 measure-narrow light-green mb5 fw3 z-2 lh-copy tl-ns tc`}
          >
            Descubra quando você vai ter grana pra mandar tudo à merda!
          </h3>
          {this.props.isShowingIntro && <PigAnimated />}
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
            // #hero {
            //   background-image: url('../static/hero-pig.svg');
            //   background-size: cover;
            // }
          `}
        </style>
      </div>
    );
  }
}

export default Intro;
