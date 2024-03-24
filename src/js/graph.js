
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
      animations: {
        tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
          to: 0,
        loop: true
      }
    },
      scales: {
       y: { // defining min and max so hiding the dataset does not change scale range
        min: 0,
        max: 100
      }
      }

    }
  });

}

