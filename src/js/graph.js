
export function lineChart(xAxis, yAxis, ticker) {
  const ctx = document.getElementById('myChart');

  export let newDataChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: xAxis,
      datasets: [{
        label: ticker,
        data: yAxis,
        borderWidth: 1,
        pointRadius: 1,
      }]
    },
    options: {

    }
  });
  return newDataChart
}

//dodawanie danych do wykresu

export function addData(chart, label, newData) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(newData);
  });
  chart.update();
}
  //usuwanie danych z wykresu
export function updateChart(chart,newXAxis, newYAxis) {
  chart.data.labels = newYAxis
  chart.data.datasets[0].data=newXAxis
  chart.update();
}

// pobranie danych do wykresu

export function dataGraph(dailyData, historicalData) {
  //przetworzenie bieżacej daty z unix na normalną
  let currentDateUnix = dailyData.timestamp // pobranie daty
  let currentDate = new Date(currentDateUnix * 1000) //przerobienie daty
  // wybranie roku miesiąca i dnia
  const year = currentDate.getFullYear();
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Dodanie 1, bo getMonth() zwraca miesiące od 0 do 11, oraz formatowanie do dwóch cyfr
  const day = ('0' + currentDate.getDate()).slice(-2); // Formatowanie do dwóch cyfr
  currentDate = `${year}-${month}-${day}`;
  // pobranie ostatniej daty z osi czasu
  let lastAxisDate = historicalData.xAxis[historicalData.xAxis.length - 1]
  // sprawdzenie dat
  if (currentDate > lastAxisDate) {
    historicalData.xAxis.push(currentDate)
    historicalData.yAxis.push(dailyData.close)
  }
  else if (currentDate === lastAxisDate) {
    historicalData.yAxis.pop()
    console.log(dailyData.close)
    historicalData.yAxis.push(dailyData.close)
  }
}

//Tworzenie wykresu

export function createGraph(historicalStockData, dailyStockData, index, token, ticker){
  // Pobranie danych historycznych
  return historicalStockData(index, token)
    .then(historicalData => {
      // Inicjalizacja danych wykresu
      const chartData = {
        yAxis: [],
        xAxis: []
      };
      // Wypełnienie danych wykresu
      for (let i = 0; i < historicalData.length; i++) {
        chartData.yAxis.push(historicalData[i].close);
        chartData.xAxis.push(historicalData[i].date);
      }
      // Pobranie danych dziennych
      return dailyStockData(index, token)
        .then(dailyData => {
          // Wywołanie funkcji generującej wykres
          lineChart(chartData.xAxis, chartData.yAxis, ticker);
          // Wywołanie funkcji przetwarzającej konkretne dane
          particularData('currentData', ticker, dailyData.change_p);
          // Przekazanie danych wykresu do funkcji dataGraph
          dataGraph(dailyData, chartData);
          // Zwrócenie danych wykresu
          return chartData;
        });
    })
}