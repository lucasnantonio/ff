import React, { Component } from 'react';

class QuestionTabs extends Component {
  render() {
    return (
      <div role="tablist" className="w-100 h3 mt3 mb4 flex justify-between">
        {this.props.tabs.map((item, index) => (
          <button
            role="tab"
            aria-selected={item.isSelected ? 'true' : 'false'}
            aria-controls={`tab${index + 1}`}
            id={item.label}
            className={`items-center ph3 pv1 mv2 f5 w-100 tc ba0 bg-transparent
              ${item.isSelected && 'black selectedTab'}
              ${this.props.isShowingAnswer ? 'black-30 pointer' : 'black-10'}
              ${this.props.isShowingAnswer && !item.isSelected && 'hover-black'}
               `}
            onClick={this.props.isShowingAnswer ? e => this.props.handleTabChange(e, index) : null}
            key={index}
          >
            {item.label}
          </button>
        ))}
        <style jsx>
          {`
            .selectedTab {
              border-bottom: 2px solid black;
            }
          `}
        </style>
      </div>
    );
  }
}

export default QuestionTabs;
