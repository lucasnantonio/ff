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
            scaleLabel: {
              display: true,
              labelString: 'idade (anos)',
            },
            ticks: {
                min: 0,
                suggestedMax: 100, // maximum value, unless there is a bigger value.
            }
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'dinheiro',
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
