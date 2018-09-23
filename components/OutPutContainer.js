import React, { Component } from 'react';
import RetirementChart from './RetirementChart';
import RetirementTable from './RetirementTable';
import RetirementSummary from './RetirementSummary';

class OutPutContainer extends Component {
  componentDidMount() {
    this.props.onComponentDidMount();
  }

  render() {
    return (
            <div className='flex'>
              <div className="w-100" id="chartContainer">
                <RetirementSummary myInvestments={this.props.myInvestments} retirementResults={this.props.retirementResults}/>
                <div className='ph5'>
                  <RetirementChart myInvestments={this.props.myInvestments} retirementResults={this.props.retirementResults}/>
                </div>
              </div>
            </div>
    );
  }
}

export default OutPutContainer;
