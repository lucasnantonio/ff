import Chart from 'chart.js';

export function getRetirementChart(ctx) {
  const RetirementChart = new Chart(ctx, {
    type: 'line',
    data: {},
    options: {
      backgroundColor: 'rgba(0, 0, 250 ,0.1)',
      pointRadius: 0,
      borderWidth: 1,
      pointHoverRadius: 0,
      borderColor: 'rgba(0, 0, 0, 0.3)',
      lineTension: 0,
      hover: {
        intersect: true,
      },
      tooltips: {
      },
      animation: false,
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
    },
  });
  return RetirementChart;
}