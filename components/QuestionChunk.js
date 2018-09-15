import React, { Component } from 'react';

class QuestionChunk extends Component {
    state = { }

    render() {
      return (
            <div className="mb6">
                {this.props.title && <h2 className="f3 b black">{this.props.title}</h2>}
                <div>
                    {this.props.children}
                </div>
            </div>
      );
    }
}

export default QuestionChunk;
