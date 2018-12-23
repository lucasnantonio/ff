import React, { Component } from 'react';

class QuestionChunk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isEnabled: props.isEnabled,
    };
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div
        className={`w-100 bt bw1 pt4 mt4
        ${!this.state.isOpen ? 'h4 overflow-y-hidden' : 'h-100 flex flex-column'}
        ${this.state.isEnabled ? 'b--black' : 'b--black-30'}
        `}
      >
        <div
          onClick={this.handleToggle}
          className={`flex justify-between items-center${this.state.isEnabled && 'pointer'}`}
        >
          <div className={`b ${this.state.isEnabled ? 'black' : 'black-30'}`}>
            {this.props.title}
          </div>
          <div>
            {this.props.isShowingStartButton && this.props.hasStartButton && !this.state.isOpen && (
              <button className="pv3 br2 ph4 white ba0 bg-blue pointer">Começar</button>
            )}
          </div>
        </div>
        {this.state.isOpen && this.props.children}
      </div>
    );
  }
}

export default QuestionChunk;
