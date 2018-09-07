import { Component } from "react";
import { getRetirementChart } from '../utils/charts';

class RetirementChart extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.chart = null
    }

    render() {
      return (
        <canvas
          ref={canvas => {
            this.canvas = canvas;
          }}
          width="4"
          height="3"
        />
      )
    }

    componentDidMount() {
      this.ctx = this.canvas.getContext('2d');

    }

    componentWillUpdate(nextProps) {
      if (this.chart) {
        this.chart.destroy();
      }

      const { data } = nextProps;

      console.log(data);

      this.chart = getRetirementChart(this.ctx, data);
      this.chart.update();
    }
}

export default RetirementChart;
