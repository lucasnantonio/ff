import React, { Component } from 'react';

class QuestionChunk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  render() {
    return (
      <div className="w-100 bt bw1 pt4 mb4 flex flex-column h-100">
        <div className="b">{this.props.title}</div>
        {this.props.children}
      </div>
    );
  }
}

export default QuestionChunk;
