import { historicalStockData, dailyStockData, createDate, interdayData } from "./import_data.js";
import { particularData } from "./particular_data.js";

export let newDataChart

export function lineChart(xAxis, yAxis, ticker) {
  const ctx = document.getElementById('myChart');

  newDataChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: xAxis,
      datasets: [{
        label: ticker,
        data: yAxis,
        borderWidth: 3,
        pointRadius: 0,
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

export function graphDelete(newDataChart) {
  newDataChart.destroy()
}

// pobranie danych do wykresu

export function createAxis(historicalData, dailyData) {
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
  if (historicalData[historicalData.length-1].date != dailyData.realTimeDay) {
    chartData.yAxis.push(dailyData.close);
    chartData.xAxis.push(dailyData.realTimeDay);
  }
  else{console.log('brak aktualnych danych')}
      return chartData;
    }

export function createGraph(index, token, startDate, endDate, ticker) {
 historicalStockData(index, token, startDate, endDate)
  .then(data => {
    historicalData = data;
    return dailyStockData(index, token);
  })
  .then(data => {
    dailyData = data;
    return particularData("currentData", index, dailyData)
  })
  .then(() => { return createAxis(historicalData, dailyData) })
  .then(data => {
    chartData = data
    return lineChart(chartData.xAxis, chartData.yAxis, ticker)
  })
  .then(data => {
    newDataChart=data
  })
  
}

export function hideChart() {
  console.log(newDataChart.data.datasets[1].borderWidth)
  newDataChart.data.datasets[1].borderWidth = 0
  newDataChart.data.datasets[2].borderWidth = 0
  newDataChart.update()
}

export function showChart() {
  console.log(newDataChart.data.datasets[1].borderWidth)
  newDataChart.data.datasets[1].borderWidth = 1
  newDataChart.data.datasets[2].borderWidth = 1
  newDataChart.update()
}

