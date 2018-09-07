import { Component } from "react";
import { getRetirementChart } from '../utils/charts';
import { getMyRetirementData } from '../utils/math'

class RetirementChart extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.chart = null
    }

    componentDidMount() {
      this.ctx = this.canvas.getContext('2d');
      this.chart = getRetirementChart(this.ctx);
    }

    componentWillUpdate(nextProps) {
      const datasets = [
        {
          label: 'POUPANÇA',
          data: getMyRetirementData(nextProps, 0.03).timeHistory,
          backgroundColor: 'rgba(250, 0, 0 ,0.1)',
          pointRadius: 0,
          borderWidth: 1,
          pointHoverRadius: 0,
          borderColor: 'rgba(0, 0, 0, 0.3)',
          lineTension: 0,
        },
        {
          label: 'POUPANÇA_P',
          data: [{
            x: getMyRetirementData(nextProps, 0.03).retirement.age / 12,
            y: getMyRetirementData(nextProps, 0.03).retirement.balance,
          }],
          pointRadius: 5,
          borderWidth: 1,
          pointHoverRadius: 0,
          borderColor: 'rgba(0, 0, 0, 1)',
        },
        {
          label: 'RENDA FIXA',
          data: getMyRetirementData(nextProps, 0.065).timeHistory,
          backgroundColor: 'rgba(0, 0, 250 ,0.1)',
          pointRadius: 0,
          borderWidth: 1,
          pointHoverRadius: 0,
          borderColor: 'rgba(0, 0, 0, 0.3)',
          lineTension: 0,
        },
        {
          label: 'RENDA VARIÁVEL',
          data: getMyRetirementData(nextProps, 0.1).timeHistory,
          backgroundColor: 'rgba(0, 250, 0 ,0.1)',
          pointRadius: 0,
          borderWidth: 1,
          pointHoverRadius: 0,
          borderColor: 'rgba(0, 0, 0, 0.3)',
          lineTension: 0,
        },
      ]

      this.chart.data = {datasets: datasets}
      this.chart.update()
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
}

export default RetirementChart;
