import React, { Component } from 'react';
import getRetirementChart from '../utils/charts';

class RetirementChart extends Component {
  constructor(props) {
    super(props);
    this.state = { icon: 'circle' };
    this.chart = null;
  }

  loadIcon = async () => {
    const retirementIcon = await new Promise((resolve, reject) => {
      const retirementImage = new Image();
      retirementImage.onload = () => resolve(retirementImage);
      retirementImage.onerror = () => reject(retirementImage);
      retirementImage.src = '../static/retirement-icon.svg';
    });
    this.setState({ icon: retirementIcon });
  }

  async componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    this.chart = getRetirementChart(this.ctx);
    await this.loadIcon();
    this.updateChart(this.props.retirementResults);
  }

  componentDidUpdate() {
    this.updateChart(this.props.retirementResults);
  }

  updateChart(retirementResults) {
    const linesets = retirementResults.map((investment, index) => {
      if (this.props.myInvestments[index].isSelected) {
        const [label, data] = investment;
        return {
          label,
          data: data.timeHistory,
          backgroundColor: 'rgba(0, 0, 0 ,0.1)',
          pointRadius: 0,
          borderWidth: 3,
          borderColor: 'rgba(255, 255, 255, 1)',
          lineTension: 0,
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
          pointStyle: this.state.icon,
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
        />
      </div>
    );
  }
}

export default RetirementChart;
