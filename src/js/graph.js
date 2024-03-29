import { historicalStockData, dailyStockData, exchangeList, interdayData } from "./import_data.js";
import { particularData } from "./particular_data.js";

export function lineChart(xAxis, yAxis, ticker) {
  const ctx = document.getElementById('myChart');

  let newDataChart = new Chart(ctx, {
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
    historicalData.yAxis.push(dailyData.close)
  }
}

export function createGraph(index, token, ticker) {
  // Wyświetlenie wykresu danych historycznych
  historicalStockData(index, token)
    .then(historicalData => {
      // Zainicjowanie listy danych dla osi x i y
      let chartData = {
        yAxis: [],
        xAxis: []
      };
      // Wstawienie danych do listy danych osi x i y
      for (let i = 0; i < historicalData.length; i++) {
        chartData.yAxis.push(historicalData[i].close);
        chartData.xAxis.push(historicalData[i].date);
      }
      return chartData;
    })
    .then(chartData => {
      // Pobranie codziennych danych giełdowych
      dailyStockData(index, token)
        .then(dailyData => {
          // Wyświetlenie danych graficznych
          dataGraph(dailyData, chartData);
          // Wyświetlenie szczególnych danych
          particularData('currentData', ticker, dailyData.change_p);
        })
        .then(() => {
          // Utworzenie wykresu liniowego
          return lineChart(chartData.xAxis, chartData.yAxis, ticker);
        })
        .then(() => {
          // Uruchomienie interwału dla codziennych danych giełdowych
          const timerId = setInterval(() => {
            console.log('start')
            dailyStockData(index, token)
              .then(dailyData => {
                // Wyświetlenie danych graficznych
                dataGraph(dailyData, chartData);
                // Wyświetlenie szczególnych danych
                particularData('currentData', ticker, dailyData.change_p);
              })
              .catch(error => {
                console.error('Error in setInterval:', error);
                clearInterval(timerId); // Zatrzymaj interwał w przypadku błędu
              });
          }, 1000);
        })
        .catch(error => {
          console.error('Error in createGraph:', error);
        });
    })
    .catch(error => {
      console.error('Error in createGraph:', error);
    });
}
