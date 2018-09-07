import { Component } from "react";
import RetirementChart from "../components/RetirementChart";

class OutPutContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="w-100">
                <div>Você vai se aposentar com</div>
                {this.props.myRetirementAge}
                {/* {this.props.myCurrentAge} */}
                <div> anos</div>
                <RetirementChart {...this.props}/>
            </div>
         );
    }
}

export default OutPutContainer;
