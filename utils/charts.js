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
            },
            gridLines:{
              display: false
            }
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              // labelString: 'dinheiro',
            },
            ticks:{
              callback: function(value, index, values) {
                return 'R$' + (value/1000 < 1000 ? value/1000 + 'mil' : value/1000000 + 'MM');
              },
            }
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
