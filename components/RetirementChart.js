import React, { Component } from 'react';
import getRetirementChart from '../utils/charts';
import colors from './Colors';

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

  async componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    this.chart = getRetirementChart(this.ctx, this.handleHover);
    await this.loadIcon('retirementIcon', '../static/retirement-icon.svg');
    await this.loadIcon('deathIcon', '../static/death-icon.svg');
    await this.loadIcon('eventValidIcon', '../static/event-icon.svg');
    await this.loadIcon('eventNotValidIcon', '../static/event-not-valid-icon.svg');

    this.updateChart(this.props.primaryData, this.props.secondaryData);
  }

  componentDidUpdate() {
    this.updateChart(this.props.primaryData, this.props.secondaryData);
  }

  updateChart(primaryData, secondaryData) {
    // Primary Set
    const primarySet = {
      label: primaryData[0],
      data: primaryData[1].timeHistory,
      backgroundColor: colors.lightGreen,
      pointRadius: 0,
      borderWidth: 3,
      borderColor: colors.darkGreen,
      lineTension: 0,
      pointHitRadius: 2,
    };

    const retirementPoint = {
      label: 'retirementPoint',
      data: [
        {
          x: primaryData[1].retirement.age / 12,
          y: primaryData[1].retirement.balance,
        },
      ],
      pointStyle: this.state.retirementIcon,
      pointHoverRadius: 0,
      borderColor: 'rgba(0, 0, 0, 1)',
    };

    const deathPoint = {
      label: 'deathPoint',
      data: [
        {
          x: primaryData[1].timeHistory[primaryData[1].timeHistory.length - 1].x,
          y: primaryData[1].timeHistory[primaryData[1].timeHistory.length - 1].y,
        },
      ],
      pointStyle: this.state.deathIcon,
      pointHoverRadius: 0,
      borderColor: 'rgba(0, 0, 0, 1)',
    };

    const eventSets = primaryData[1].events.map((e, index) => ({
      label: `event${index}`,
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

    // Secondary Set
    let secondarySet = {};
    if (secondaryData !== undefined) {
      secondarySet = {
        label: secondaryData[0],
        data: secondaryData[1].timeHistory,
        backgroundColor: colors.lightGreen,
        pointRadius: 0,
        borderWidth: 1,
        borderColor: colors.darkGreen,
        lineTension: 0,
        pointHitRadius: 2,
      };
    }

    const minX = Math.min(...primarySet.data.map(v => v.x));

    this.chart.data = {
      datasets: [
        retirementPoint,
        deathPoint,
        ...eventSets,
        secondarySet,
        primarySet,
      ],
    };

    this.chart.options.scales.xAxes[0].ticks.min = minX;
    this.chart.update();
  }

  render() {
    return (
      <div style={{ minHeight: '10rem' }} className="relative w-100 h-100-l h5">
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
