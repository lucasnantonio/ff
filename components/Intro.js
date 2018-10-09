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
        <div className="flex flex-column h-100 ph5">
          <div className="mb2 mw7 w-50">
            <Logo />
          </div>
          <h3 className="f4 measure-narrow gray mb5">
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
