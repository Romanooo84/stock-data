
export function lineChart(xAxis, yAxis) {
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: xAxis,
      datasets: [{
        label: '# of Votes',
        data: yAxis,
        borderWidth: 1
      }]
    },
    options: {
    }
  });

}