import React, { Component } from 'react';
import RetirementChart from './RetirementChart';
import RetirementSummary from './RetirementSummary';

class OutPutContainer extends Component {
  render() {
    return (
      <div
        id="resultsWrapper"
        className={'bg-green ph5-ns ph3 pv5 w-50-ns w-100 flex-ns flex-column-ns'}
      >
        {!this.props.isShowingIntro
          && this.props.isShowingCalculation && (
            <React.Fragment>
              <RetirementSummary
                myInvestments={this.props.myInvestments}
                retirementResults={this.props.retirementResults}
              />
              <RetirementChart
                lifeEvents={this.props.lifeEvents}
                myInvestments={this.props.myInvestments}
                retirementResults={this.props.retirementResults}
              />
            </React.Fragment>
        )}
        <style jsx>
          {`
            .bg-green {
              background-color: #1ed090;
            }
          `}
        </style>
      </div>
    );
  }
}

export default OutPutContainer;
