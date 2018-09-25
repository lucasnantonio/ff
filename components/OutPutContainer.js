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
                    ${!this.props.isShowingIntro && this.props.isShowingCalculation ? 'fixed-l r0 w-50-l w-100' : 'w-100 dn'}
                  `}>
            {!this.props.isShowingIntro && this.props.isShowingCalculation
            && <React.Fragment>
                <RetirementSummary
                  myInvestments={this.props.myInvestments}
                  retirementResults={this.props.retirementResults}/>
                <RetirementChart
                  lifeEvents={this.props.lifeEvents}
                  myInvestments={this.props.myInvestments}
                  retirementResults={this.props.retirementResults}/>
              </React.Fragment>
            }
      </div>
    );
  }
}

export default OutPutContainer;
