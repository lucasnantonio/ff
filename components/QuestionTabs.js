import React, { Component } from 'react';

class QuestionTabs extends Component {
  render() {
    return (
      <div className="w-100 h3 flex justify-between">
        {this.props.tabs.map((item, index) => (
          <div
            id={item.label}
            className={`${item.isSelected && 'bg-green white'} 
              ${this.props.isShowingCalculation ? 'black-30 pointer' : 'black-10'}
              ttu fw3 flex items-center ttu ph3 pv1 mv2 br-pill  fw6`}
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
