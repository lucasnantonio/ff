import React, { Component } from 'react';

class QuestionTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { label: 'básico', isSelected: true },
        { label: 'avançado', isSelected: false },
        { label: 'taxas', isSelected: false },
      ],
    };
  }

  handleClick = (e, index) => {
    const { options } = this.state;
    const newState = options.map((item, itemIndex) => ({
      ...item,
      isSelected: index === itemIndex,
    }));
    this.setState({ options: newState });
  };

  render() {
    return (
      <div className="w-100 h-100 flex justify-between">
        {this.state.options.map((item, index) => (
          <div
            id={item.label}
            className={`${item.isSelected
              && 'bg-green white'} ttu fw3 flex items-center ttu ph3 pv1 mv2 br-pill pointer`}
            onClick={e => this.handleClick(e, index)}
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
