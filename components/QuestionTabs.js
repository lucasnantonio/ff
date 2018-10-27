import React, { Component } from 'react';

class QuestionTabs extends Component {
  render() {
    return (
      <div className="w-100 h3 mb3 flex justify-between">
        {this.props.tabs.map((item, index) => (
          <div
            id={item.label}
            className={`${item.isSelected && 'bg-black-80 white'} 
              ${this.props.isShowingCalculation ? 'black-30 pointer' : 'black-10'}
              ${this.props.isShowingCalculation && !item.isSelected && 'hover-bg-near-white'}
              ttu fw6 flex items-center ttu ph3 pv1 mv2 br-pill f6`}
            onClick={
              this.props.isShowingCalculation ? e => this.props.handleTabChange(e, index) : null
            }
            key={index}
          >
            {item.label}
          </div>
        ))}
      </div>
    );
  }
}

export default QuestionTabs;
