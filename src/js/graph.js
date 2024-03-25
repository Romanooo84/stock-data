
export function lineChart(xAxis, yAxis, ticker) {
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: xAxis,
      datasets: [{
        label: ticker,
        data: yAxis,
        borderWidth: 1
      }]
    },
    options: {
    }
  });

}
