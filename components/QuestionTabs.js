import React, { Component } from 'react';

class QuestionTabs extends Component {
  render() {
    return (
      <div className="w-100 h3 mv3 flex justify-between">
        {this.props.tabs.map((item, index) => (
          <div
            id={item.label}
            className={`${item.isSelected && 'bb b--black bw1 black'} 
              ${this.props.isShowingAnswer ? 'black-30 pointer' : 'black-10'}
              ${this.props.isShowingAnswer && !item.isSelected && 'hover-black'}
               items-center ph3 pv1 mv2 f5 w-100 tc`}
            onClick={this.props.isShowingAnswer ? e => this.props.handleTabChange(e, index) : null}
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
