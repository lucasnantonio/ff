import Chart from 'chart.js';

export function getRetirementChart(ctx, data) {
  const RetirementChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        {
          label: '',
          data: data,
        }
      ],
    },
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
        display: false,
      },
    },
  });
  return RetirementChart;
}
