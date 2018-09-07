import { Component } from "react";
import RetirementChart from "../components/RetirementChart";
import { getMyRetirementChart } from '../utils/math'

class OutPutContainer extends Component {
    state = {  }
    render() {
        return (
            <div className="w-100 bg-yellow">
                <div>Você vai se aposentar com</div>
                {this.props.myRetirementAge}
                {/* {this.props.myCurrentAge} */}
                <div> anos</div>
                <RetirementChart data={getMyRetirementChart(this.props)}/>
            </div>
         );
    }
}

export default OutPutContainer;
