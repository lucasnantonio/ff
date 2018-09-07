import { Component } from "react";

class OutPutContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="w-100">
                <div>Você vai se aposentar com</div>
                {this.props.myRetirementAge}
                {/* {this.props.myCurrentAge} */}
                <div> anos</div>
            </div>
         );
    }
}
 
export default OutPutContainer;