import { Component } from "react";
import { getRetirementChart } from '../utils/charts';
import { getMyRetirementChart } from '../utils/math'

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

      const datasets = [
        {
          label: 'POUPANÇA',
          data: getMyRetirementChart(nextProps, 0.03),
          backgroundColor: 'rgba(250, 0, 0 ,0.1)',
          pointRadius: 0,
          borderWidth: 1,
          pointHoverRadius: 0,
          borderColor: 'rgba(0, 0, 0, 0.3)',
          lineTension: 0,
        },
        {
          label: 'RENDA FIXA',
          data: getMyRetirementChart(nextProps, 0.065),
          backgroundColor: 'rgba(0, 0, 250 ,0.1)',
          pointRadius: 0,
          borderWidth: 1,
          pointHoverRadius: 0,
          borderColor: 'rgba(0, 0, 0, 0.3)',
          lineTension: 0,
        },
        {
          label: 'RENDA VARIÁVEL',
          data: getMyRetirementChart(nextProps, 0.1),
          backgroundColor: 'rgba(0, 250, 0 ,0.1)',
          pointRadius: 0,
          borderWidth: 1,
          pointHoverRadius: 0,
          borderColor: 'rgba(0, 0, 0, 0.3)',
          lineTension: 0,
        },
      ]

      this.chart = getRetirementChart(this.ctx, datasets);
      this.chart.update();
    }
}

export default RetirementChart;
