import React, { Component } from 'react';
import getRetirementChart from '../utils/charts';

class RetirementChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorX: 50,
      retirementIcon: 'circle',
      eventValidIcon: 'circle',
      eventNotValidIcon: 'circle',
      eventDeath: 'circle',
    };
    this.chart = null;
  }

  handleHover = (cursorX) => {
    this.setState({ cursorX });
  };

  loadIcon = async (retirementIconName, path) => {
    const retirementIcon = await new Promise((resolve, reject) => {
      const retirementImage = new Image();
      retirementImage.onload = () => resolve(retirementImage);
      retirementImage.onerror = () => reject(retirementImage);
      retirementImage.src = path;
    });
    this.setState({ [retirementIconName]: retirementIcon });
  };

  filterIntegerAge(investmentData) {
    return investmentData.timeHistory.filter(
      point => point.x === parseInt(point.x) || point.x === investmentData.retirement.age / 12,
    );
  }

  async componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    this.chart = getRetirementChart(this.ctx, this.handleHover);
    await this.loadIcon('retirementIcon', '../static/retirement-icon.svg');
    await this.loadIcon('deathIcon', '../static/death-icon.svg');
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
      data: this.filterIntegerAge(investmentData),
      backgroundColor: 'rgba(0, 0, 0 ,0.1)',
      pointRadius: 0,
      borderWidth: 3,
      borderColor: 'rgba(255, 255, 255, 1)',
      lineTension: 0,
      pointHitRadius: 2,
    };

    const otherInvestmentsSets = otherInvestments.map((investment) => {
      const [otherLabel, otherInvestmentData] = investment;
      return {
        label: otherLabel,
        data: this.filterIntegerAge(otherInvestmentData),
        backgroundColor: 'rgba(0, 0, 0 ,0)',
        pointRadius: 0,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        lineTension: 0,
        pointHitRadius: 2,
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

    const deathPoint = {
      label,
      data: [
        {
          x: investmentData.timeHistory[investmentData.timeHistory.length - 1].x,
          y: investmentData.timeHistory[investmentData.timeHistory.length - 1].y,
        },
      ],
      pointStyle: this.state.deathIcon,
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
        deathPoint,
        ...eventSets,
        selectedInvestmentSet,
        ...otherInvestmentsSets,
      ],
    };

    this.chart.options.scales.xAxes[0].ticks.min = minX;
    this.chart.update();
  }

  render() {
    return (
      <div style={{ minHeight: '10rem' }} className="relative w-100 h-100">
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
