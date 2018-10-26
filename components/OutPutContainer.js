import React, { Component } from 'react';
import RetirementChart from './RetirementChart';
import RetirementSummary from './RetirementSummary';

class OutPutContainer extends Component {
  render() {
    return (
      <div
        id="resultsWrapper"
        className={
          'bg-green w-50-l w-100 flex flex-column center items-center justify-center h-100-ns vh-100 pa5-ns pa4'
        }
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
