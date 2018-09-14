import { Component } from "react";
import RetirementChart from "../components/RetirementChart";
import RetirementTable from "../components/RetirementTable";

class OutPutContainer extends Component {
    state = {
      isPictureShowing : true
     }
     startApp () {
      this.setState({
        isPictureShowing: false
      })
      document.getElementById('chartContainer').scrollIntoView({behavior: "smooth", block:"start"})
  }
    render() {
        return (
            <div className={`w-100 ph5 ${this.state.isPictureShowing ? "overflow-hidden" : "overflow-scroll"}` }>
            <div className="vh-100 flex flex-column justify-center">
              <img className="w-80" src="https://images.unsplash.com/photo-1524841943832-d2130e6ec264?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cbb8d38a877863d7dbabaf95c03b5452&auto=format&fit=crop&w=3023&q=80"></img>
            </div>

            <div className="vh-100 flex flex-column justify-center" id="chartContainer">
              <RetirementChart retirementResults={this.props.retirementResults}/>
              <RetirementTable retirementResults={this.props.retirementResults}/>
            </div>
            </div>
         );
    }
}

export default OutPutContainer;
