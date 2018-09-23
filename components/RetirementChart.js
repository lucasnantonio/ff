import React, { Component } from 'react';
import { getRetirementChart } from '../utils/charts';

class RetirementChart extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.chart = null;
  }

  getIcon = () => {
    const retirementIcon = new Image();
    retirementIcon.src = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/beach-with-umbrella_1f3d6.png';
    retirementIcon.width = '30';
    retirementIcon.height = '30';
    retirementIcon.style.marginBottom = '50px';
    retirementIcon.style.paddingBottom = '50px';
    return retirementIcon;
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    this.chart = getRetirementChart(this.ctx);
  }

  componentDidUpdate(nextProps) {
    const { retirementResults } = nextProps;

    const options = {
      poupança: {
        backgroundColor: 'rgba(0,0,0,0)',
        pointRadius: 0,
        borderColor: 'rgba(46, 167, 118, 1.0)',
        borderWidth: 3,
      },
      'renda fixa': {
        backgroundColor: 'rgba(0, 0, 250 ,0.1)',
        pointRadius: 0,
        borderWidth: 1,
        pointHoverRadius: 0,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        lineTension: 0,
      },
      'renda variável': {
        backgroundColor: 'rgba(0, 250, 0 ,0.1)',
        pointRadius: 0,
        borderWidth: 1,
        pointHoverRadius: 0,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        lineTension: 0,
      },
    };

    const linesets = retirementResults.map((investment, index) => {
      if (this.props.myInvestments[index].isSelected) {
        const [label, data] = investment;
        return {
          label,
          data: data.timeHistory,
          ...options[label],
        };
      }
      return {};
    });

    const pointsets = retirementResults.map((investment, index) => {
      if (this.props.myInvestments[index].isSelected) {
        const [label, data] = investment;
        return {
          label,
          data: [{
            x: data.retirement.age / 12,
            y: data.retirement.balance,
          }],
          pointStyle: this.getIcon(),
          pointRadius: 3,
          borderWidth: 1,
          pointHoverRadius: 0,
          borderColor: 'rgba(0, 0, 0, 1)',
        };
      }
      return {};
    });

    this.chart.data = { datasets: [...pointsets, ...linesets] };
    this.chart.update();
  }

  render() {
    return (
      <div className="relative w-100 h-100 bg-green pa5">
        <canvas
          ref={(canvas) => {
            this.canvas = canvas;
          }}
          // width="4"
          // height="3"
        />
      </div>
    );
  }
}

export default RetirementChart;
