import React, { Component } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import IntroQuestion from './IntroQuestion';
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
          className={'flex h-100 ph5-ns ph4 justify-center items-center relative overflow-hidden'}
        >
          <div
            id="navbar"
            style={{ position: 'absolute', left: '0rem', top: '0' }}
            className="white z-max flex w-100 ph5-l ph4-ns ph3 pv4 justify-between"
          >
            <Logo onClick={this.props.handleBack} />
            <div className="flex">
              <Link href="sobre">
                <div className="pointer link white-80 pv3 ph3 flex flex-row justify-center items-center br-pill hover-bg-black-10 hover-white nowrap f6-ns f7">
                  Nos pague um café <span className=" ml2 light-pink"> ♥</span>
                </div>
              </Link>
            </div>
          </div>
          <h3
            className={`${
              this.props.isShowingIntro ? 'flex' : 'dn'
            } f-subheadline-l f1-ns f3  measure-narrow white-90 fw3 lh-solid tl-l tc ml0-l center fw1 z-max titan mb0-l mb5-ns mb5`}
          >
            Planeje sua <br /> independência <br /> financeira.
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
