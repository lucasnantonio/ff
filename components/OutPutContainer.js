import React, { Component } from 'react';
import RetirementChart from './RetirementChart';
import RetirementSummary from './RetirementSummary';

class OutPutContainer extends Component {
  render() {
    return (
      <div id="resultsWrapper" className={'bg-green w-100'}>
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
