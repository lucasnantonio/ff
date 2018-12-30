import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { formatAge } from '../utils/math';
import colors from './Colors';

class RetirementSummaryFloating extends Component {
  state = { isShowing: false, isShowingUpdateButton: false };

  scrollBackUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  };

  checkVisibility = () => {
    const el = document.getElementById('answersContainer');
    const height = el ? el.offsetHeight : null;
    this.setState({ isShowing: window.pageYOffset > height });
  };

  getSelectedInvestmentIndex = (array) => {
    const selectedItem = array.filter(item => item.isSelected);
    return array.indexOf(selectedItem[0]);
  };

  showUpdate = () => {
    if (this.state.isShowingUpdateButton === false) {
      this.setState({ isShowingUpdateButton: true });
      setTimeout(() => this.setState({ isShowingUpdateButton: false }), 3000);
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.props.retirementResults !== prevProps.retirementResults
      || this.props.myInvestments !== prevProps.myInvestments
    ) {
      this.showUpdate();
    }
  };

  render() {
    window.onscroll = this.checkVisibility;
    const { age } = this.props.retirementResults[
      this.getSelectedInvestmentIndex(this.props.myInvestments)
    ][1].retirement;
    const [y] = formatAge(age);

    return (
      this.state.isShowing && (
        <button
          style={{ backgroundColor: colors.darkGreen }}
          className="fixed w-100 pa4-ns pa3 white z-max pointer f5-ns f6 ba0"
          onClick={this.scrollBackUp}
        >
          <div className="flex justify-between mw7 center w-100 items-center">
            <div className="flex flex-row-ns flex-column justify-start">
              <span className="white b" style={{ fontFamily: 'Work Sans, system-ui' }}>
                {' '}
                Você vai se aposentar aos {y} anos.{' '}
              </span>
              <CSSTransitionGroup
                transitionName="update"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
              >
                {this.state.isShowingUpdateButton && (
                  <div
                    style={{
                      fontFamily: 'Work Sans, system-ui',
                      transition: 'all .5s',
                      overflow: 'hidden',
                    }}
                    className="ph3-ns mt0-ns mt2 black-50 bn pointer tl"
                  >
                    Atualizado&nbsp;✓
                  </div>
                )}
              </CSSTransitionGroup>
            </div>
            <div className="mw1">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.5 1L28 14.2734L25.3872 16.8423L16.3475 7.95436V29H12.6525V7.95436L3.61278 16.8423L1 14.2734L14.5 1Z"
                  fill="black"
                  fillOpacity="0.2"
                />
              </svg>
            </div>
          </div>
          <style jsx>
            {`
              .update-enter {
                max-width: 0px;
                opacity: 0;
              }
              .update-enter-active {
                max-width: 200px;
                opacity: 1;
              }
              .update-appear {
                max-width: 0px;
                opacity: 0;
              }
              .update-appear-active {
                max-width: 200px;
                opacity: 1;
              }
              .update-leave {
                max-width: 200px;
                opacity: 1;
              }
              .update-leave-active {
                max-width: 0px;
                opacity: 0;
              }
            `}
          </style>
        </button>
      )
    );
  }
}

export default RetirementSummaryFloating;
