import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { Transition, animated } from 'react-spring';
import StepperButton from './StepperButton';
import StepperMarks from './StepperMarks';

class StepperContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      nSteps: this.props.children.length,
      direction: 1,
    };
  }

  handleStep(increment) {
    const nextStep = Math.max(
      Math.min(this.state.step + increment, this.state.nSteps - 1),
      0,
    );
    this.setState(prevState => ({
      step: nextStep,
      direction: nextStep > prevState.step ? 1 : -1,
    }));
  }

  render() {
    const { step, nSteps, direction } = this.state;
    const duration = 20000;
    return (
      <div className={'flex flex-wrap items-center justify-center ph5'}>
        <StepperMarks step={step} nSteps={nSteps} />
        <StepperButton
          onClick={step === 0 ? () => this.props.handleShowTips(false) : () => this.handleStep(-1)}>
            {'<'}
        </StepperButton>

        {/* Content */}
        <div className={'relative mw7-ns w-100'}>
          <Transition
            items={this.state.step}
            from={{
              position: 'absolute',
              opacity: 0,
              transform: `translate3d(${direction * 100}%,0,0)`,
            }}
            enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
            leave={{ opacity: 0, transform: `translate3d(${-direction * 100}%,0,0)` }}>
              {step => (
                props => <div style={props}>{this.props.children[step]}</div>
              )
              }
          </Transition>
        </div>
        {/* <CSSTransitionGroup
          transitionName={'slide2'}
          transitionEnterTimeout={duration}
          transitionLeaveTimeout={duration}
          className="relative"
          component="div"
        >
          {this.props.children[step]}
          <style jsx global>
              {`
                .slide2-enter {
                  transform: translateX(${direction * 100}%);
                  opacity: 0;
                }

                .slide2-enter-active {
                  transform: translateX(0px);
                  transition: all ${duration}ms ease-in-out;
                  opacity: 1;
                }

                .slide2-leave {
                  transform: translateX(0px);
                  opacity: 1;
                }

                .slide2-leave-active {
                  transform: translateX(${-direction * 100}%);
                  transition: all ${duration}ms ease-in-out;
                  opacity: 0;
                }
              `}
            </style>
        </CSSTransitionGroup> */}
        <StepperButton
          disabled={step === nSteps - 1}
          onClick={() => this.handleStep(1)}>
            {'>'}
        </StepperButton>
      </div>
    );
  }
}

export default StepperContainer;
