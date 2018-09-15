import React, { Component } from 'react';
import RetirementChart from './RetirementChart';
import RetirementTable from './RetirementTable';

class OutPutContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onComponentDidMount();
  }

  render() {
    return (
            <div className='flex ph5'>
              <div className="vh-100 flex flex-column justify-center" id="chartContainer">
                <RetirementChart retirementResults={this.props.retirementResults}/>
                <RetirementTable retirementResults={this.props.retirementResults}/>
              </div>
            </div>
    );
  }
}

export default OutPutContainer;
