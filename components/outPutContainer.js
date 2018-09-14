import React, { Component } from 'react';
import RetirementChart from './RetirementChart';
import RetirementTable from './RetirementTable';

class OutPutContainer extends Component {
    state = {}

    startApp() {}

    render() {
      return (
            <div className='w-100 ph5'>
              <div className="vh-100 flex flex-column justify-center" id="chartContainer">
                <RetirementChart retirementResults={this.props.retirementResults}/>
                <RetirementTable retirementResults={this.props.retirementResults}/>
              </div>
            </div>
      );
    }
}

export default OutPutContainer;
