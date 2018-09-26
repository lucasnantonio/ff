import React, { Component } from 'react';
import getRetirementChart from '../utils/charts';

class RetirementChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      retirementIcon: 'circle',
      eventValidIcon: 'circle',
      eventNotValidIcon: 'circle',
    };
    this.chart = null;
  }

  loadIcon = async (retirementIconName, path) => {
    const retirementIcon = await new Promise((resolve, reject) => {
      const retirementImage = new Image();
      retirementImage.onload = () => resolve(retirementImage);
      retirementImage.onerror = () => reject(retirementImage);
      retirementImage.src = path;
    });
    this.setState({ [retirementIconName]: retirementIcon });
  }

  async componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    this.chart = getRetirementChart(this.ctx);
    await this.loadIcon('retirementIcon', '../static/retirement-icon.svg');
    await this.loadIcon('eventValidIcon', '../static/event-icon.svg');
    await this.loadIcon('eventNotValidIcon', '../static/event-not-valid-icon.svg');
    this.updateChart(this.props.retirementResults);
  }

  componentDidUpdate() {
    this.updateChart(this.props.retirementResults);
  }

  updateChart(retirementResults) {
    // selected investment
    const [label, investmentData] = retirementResults.filter(
      (investment, index) => this.props.myInvestments[index].isSelected,
    )[0];

    const otherInvestments = retirementResults.filter(
      (investment, index) => !this.props.myInvestments[index].isSelected,
    );

    const selectedInvestmentSet = {
      label,
      data: investmentData.timeHistory,
      backgroundColor: 'rgba(0, 0, 0 ,0.1)',
      pointRadius: 0,
      borderWidth: 3,
      borderColor: 'rgba(255, 255, 255, 1)',
      lineTension: 0,
    };

    const otherInvestmentsSets = otherInvestments.map((investment) => {
      const [otherLabel, otherInvestmentData] = investment;
      return {
        otherLabel,
        data: otherInvestmentData.timeHistory,
        backgroundColor: 'rgba(0, 0, 0 ,0)',
        pointRadius: 0,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        lineTension: 0,
      };
    });

    const retirementPoint = {
      label,
      data: [
        {
          x: investmentData.retirement.age / 12,
          y: investmentData.retirement.balance,
        },
      ],
      pointStyle: this.state.retirementIcon,
      pointHoverRadius: 0,
      borderColor: 'rgba(0, 0, 0, 1)',
    };

    const eventSets = investmentData.events.map(e => ({
      label,
      data: [
        {
          x: e.age,
          y: e.balance,
        },
      ],
      pointStyle: e.valid ? this.state.eventValidIcon : this.state.eventNotValidIcon,
      pointHoverRadius: 0,
      borderColor: 'rgba(0, 0, 0, 1)',
    }));

    const minX = Math.min(...selectedInvestmentSet.data.map(v => v.x));

    this.chart.data = {
      datasets: [
        retirementPoint,
        ...eventSets,
        selectedInvestmentSet,
        ...otherInvestmentsSets],
    };

    this.chart.options.scales.xAxes[0].ticks.min = minX;
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
