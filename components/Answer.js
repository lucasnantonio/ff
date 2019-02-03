import React, { Component } from 'react';
import RetirementChart from './RetirementChart';
import RetirementSummary from './RetirementSummary';
import DonationCall from './DonationCall';
import ShareCall from './ShareCall';

class OutPutContainer extends Component {
  render() {
    return (
      <div
        id="answersContainer"
        className={'ph0-ns ph4 pv5'}
        style={{ minWidth: '100%' }}
      >
        <div className="flex flex-row-ns flex-column mt0-ns pv5-l pt5 pb0 mw7 center ">
          <div className="w-100 f3-ns f5 tl-ns tc self-center pr5-ns pr0">
            <RetirementSummary
              myLifeExpectancy={this.props.myLifeExpectancy}
              myCurrentAge={this.props.myCurrentAge}
              myInvestments={this.props.myInvestments}
              retirementResults={this.props.retirementResults}
              myRetirementIncome={this.props.myRetirementIncome}
            />
          </div>
          <div className="w-100">
            <RetirementChart
              primaryData={this.props.retirementResults[0]}
            />
          </div>
          <div className="dn-ns dib">
            <DonationCall />
            <ShareCall />
          </div>
        </div>
        <button
          className={'absolute'}
          style={{ top: '50%', right: 0 }}
          onClick={() => this.props.handleShowTips(true)}>
            Ver dicas
        </button>
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
