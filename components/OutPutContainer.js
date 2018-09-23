import React, { Component } from 'react';
import RetirementChart from './RetirementChart';
import RetirementSummary from './RetirementSummary';
import Button from './Button';

class OutPutContainer extends Component {
  componentDidMount() {
    this.props.onComponentDidMount();
  }

  render() {
    return (
      <div id="resultsWrapper"
        className={`flex flex-column center items-center justify-center
                    ${this.props.isShowingIntro ? 'bg-white h-100' : 'bg-near-white vh-100'}
                    ${!this.props.isShowingIntro && this.props.isShowingCalculation ? 'fixed r0 w-50' : 'w-100'}
                  `}>
        {this.props.isShowingCalculation
        && <div className={`${this.props.isShowingCalculation ? '' : 'dn'}`}>
            <RetirementSummary myInvestments={this.props.myInvestments} retirementResults={this.props.retirementResults}/>
            <RetirementChart myInvestments={this.props.myInvestments} retirementResults={this.props.retirementResults}/>
        </div>
        }
      </div>
    );
  }
}

export default OutPutContainer;
