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

  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.props.retirementResults !== prevProps.retirementResults
      || this.props.myInvestments !== prevProps.myInvestments
    ) {
      this.state.isShowingUpdateButton === false && this.setState({ isShowingUpdateButton: true });
    }
    setTimeout(() => this.setState({ isShowingUpdateButton: false }), 10000);
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
          <div className="mw7 center w-100 flex justify-start">
            <span className="white"> Você vai se aposentar aos {y} anos. </span>
            <CSSTransitionGroup
              transitionName="update"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              {this.state.isShowingUpdateButton && (
                <div
                  className="ph3 black-50 bn pointer"
                  style={{ transition: 'all .5s', overflow: 'hidden' }}
                >
                  Atualizado&nbsp;✓
                </div>
              )}
            </CSSTransitionGroup>
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
