import { Component } from 'react'
class QuestionChunk extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="mb6">
                <h2 className="f2 b">
                    {this.props.title}
                </h2> 
                <div>
                    {this.props.children}
                </div>
            </div>
         );
    }
}
 
export default QuestionChunk;