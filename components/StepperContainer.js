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
    const duration = 400;
    return (
      <div className={'relative w-100'} style={{ height: 'calc(100vh - 8rem)' }}>
        <StepperMarks
          style={{ position: 'absolute', bottom: 0 }}
          step={step}
          nSteps={nSteps}
        />
        <StepperButton
          style={{ position: 'absolute', left: 0, bottom: 0 }}
          onClick={step === 0 ? () => this.props.handleShowTips(false) : () => this.handleStep(-1)}
        >
            {'<'}
        </StepperButton>
        <StepperButton
          style={{ position: 'absolute', right: 0, bottom: 0 }}
          disabled={step === nSteps - 1}
          onClick={() => this.handleStep(1)}>
            {'>'}
        </StepperButton>

        {/* Content */}
        <CSSTransitionGroup
          transitionName={'slide2'}
          transitionEnterTimeout={duration}
          transitionLeaveTimeout={duration}
          component="div"
          className="relative mt0-ns pv5-l pt5 pb0 mw7 center debug"
          style={{ height: 'calc(100% - 4rem)' }}
        >
          {this.props.children.map((children, index) => {
            if (index === step) {
              return (
                <div key={index} className={'absolute top-0 bottom-0'}>
                  {children}
                </div>
              );
            }
            return null;
          })}
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
        </CSSTransitionGroup>

      </div>
    );
  }
}

export default StepperContainer;
