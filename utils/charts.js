import Chart from 'chart.js';
import toCurrency from './math.js';

Chart.defaults.global.defaultFontColor = 'rgba(0,0,0,.4)';
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
        },
      },
      tooltips: {
        mode: 'x',
        intersect: false,
        backgroundColor: '#000',
        displayColors: false,
        xPadding: 20,
        yPadding: 20,
        bodySpacing: 10,
        callbacks: {
          title: tooltipItem => `${Math.floor(tooltipItem[0].xLabel)} anos`,
          label: tooltipItem => `R$ ${parseFloat(tooltipItem.yLabel.toFixed(2)).toLocaleString('pt-br')}`,
        },
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
            scaleLabel: {
              display: true,
            },
            ticks: {
              suggestedMin: 0,
              callback(value, index, values) {
                return `R$${value / 1000 < 1000 ? `${value / 1000}mil` : `${value / 1000000}MM`}`;
              },
            },
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
