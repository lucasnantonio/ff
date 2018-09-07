import { Component } from "react";
import RetirementChart from "../components/RetirementChart";
import RetirementTable from "../components/RetirementTable";

class OutPutContainer extends Component {
    state = {  }
    render() {
        return (
            <div className="w-100">
              <RetirementChart
                retirementResults={this.props.retirementResults}
              />
            <RetirementTable
                retirementResults={this.props.retirementResults}
              />
            </div>
         );
    }
}

export default OutPutContainer;
