import React, { Component } from 'react';
import getRetirementChart from '../utils/charts';
import colors from './Colors';

class RetirementChart2 extends Component {
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

    const {
      retirementResults, studyCasesResults, primaryLabels, secondaryLabels,
    } = this.props;

    this.updateChart(retirementResults, studyCasesResults, primaryLabels, secondaryLabels);
  }

  componentDidUpdate() {
    const {
      retirementResults, studyCasesResults, primaryLabels, secondaryLabels,
    } = this.props;
    this.updateChart(retirementResults, studyCasesResults, primaryLabels, secondaryLabels);
  }

  updateChart(retirementResults, studyCasesResults, primaryLabels, secondaryLabels) {
    const primaryData = [...retirementResults, ...studyCasesResults].filter(item => primaryLabels.includes(item[0]));
    const secondaryData = [...retirementResults, ...studyCasesResults].filter(item => secondaryLabels.includes(item[0]));

    const primarySets = primaryData.map((item) => {
      const [label, results] = item;
      return {
        label,
        data: results.timeHistory,
        backgroundColor: colors.lightGreen,
        pointRadius: 0,
        borderWidth: 3,
        borderColor: colors.darkGreen,
        lineTension: 0,
        pointHitRadius: 2,
      };
    });

    const secondarySets = secondaryData.map((item) => {
      const [label, results] = item;
      return {
        label,
        data: results.timeHistory,
        backgroundColor: colors.lightGreen,
        pointRadius: 0,
        borderWidth: 1,
        borderColor: colors.darkGreen,
        lineTension: 0,
        pointHitRadius: 2,
      };
    });

    const minX = Math.min(...primarySets[0].data.map(v => v.x));

    this.chart.data = {
      datasets: [
        ...secondarySets,
        ...primarySets,
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

export default RetirementChart2;
