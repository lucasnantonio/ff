import React, { Component } from 'react';

class QuestionChunk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div
        className={`w-100 bt bw1 pt4 mb4   ${
          this.state.isOpen ? 'h3 overflow-y-hidden' : 'h-100 flex flex-column'
        } `}
      >
        <div className="flex justify-between">
          <div className="b">{this.props.title}</div>
          <div onClick={this.handleToggle}>{!this.state.isOpen ? 'close' : 'open'}</div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default QuestionChunk;
