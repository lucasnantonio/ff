import Chart from 'chart.js';
import toCurrency from './math.js';
import colors from '../components/Colors';

Chart.defaults.global.defaultFontColor = colors.mediumGray;
Chart.defaults.global.defaultFontFamily = 'Poppins, system-ui';

export default function getRetirementChart(ctx, handleHover) {
  const RetirementChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [],
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 50,
          left: 20,
          right: 20,
        },
      },
      tooltips: {
        enabled: false,
      },
      animation: {
        duration: 0, // in milliseconds
        scale: false,
      },
      scales: {
        xAxes: [
          {
            type: 'linear',
            position: 'bottom',
            scaleLabel: {
              display: true,
              labelString: 'idade (anos)',
            },
            ticks: {
              min: 0,
              suggestedMax: 100, // maximum value, unless there is a bigger value.
            },
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            display: false,
          },
        ],
      },
      legend: {
        display: false,
      },
      onHover(event, elementsAtEvent) {
        let valueX;

        for (const scaleName in this.scales) {
          const scale = this.scales[scaleName];
          if (scale.isHorizontal()) {
            valueX = scale.getValueForPixel(event.offsetX);
          }
        }

        const datasets = this.data.datasets;

        const maxX = Math.max(...datasets.map(set => Math.max(...set.data.map(v => v.x))));

        valueX = Math.min(maxX, valueX);
        valueX = Math.max(0, valueX);

        handleHover(valueX);
      },
    },
  });

  return RetirementChart;
}
