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
            <div className='flex ph5 pt5'>
              <div className="" id="chartContainer">
                <RetirementSummary myInvestments={this.props.myInvestments} retirementResults={this.props.retirementResults}/>
                <RetirementChart myInvestments={this.props.myInvestments} retirementResults={this.props.retirementResults}/>
                <RetirementTable retirementResults={this.props.retirementResults}/>
              </div>
            </div>
    );
  }
}

export default OutPutContainer;
