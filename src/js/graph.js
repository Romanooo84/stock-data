
export function lineChart(xAxis, yAxis) {
  console.log(xAxis)
  console.log(yAxis)
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
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}