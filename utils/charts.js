import Chart from 'chart.js';

export function getRetirementChart(ctx) {
  const RetirementChart = new Chart(ctx, {
    type: 'line',
    data: {},
    options: {
      animation: false,
      scales: {
        xAxes: [
          {
            type: 'linear',
            position: 'bottom',
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'balance',
            },
          },
        ],
      },
      legend: {
        display: true,
      },
    },
  });
  return RetirementChart;
}
