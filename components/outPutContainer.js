import { Component } from "react";

class OutPutContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="w-100">
                OutPut Container
                {this.props.myIncome}
            </div>
         );
    }
}
 
export default OutPutContainer;