import React, { Component } from 'react';
import RetirementChart from './RetirementChart';
import RetirementSummary from './RetirementSummary';

class OutPutContainer extends Component {
  render() {
    return (
      <div id="answersContainer" className={''}>
        {this.props.isShowingAnswer && (
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
