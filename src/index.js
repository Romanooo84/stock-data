import { lineChart } from "./js/graph.js";
import { historicalStockData, dailyStockData, exchangeList } from "./js/import_data.js";

const token = '65fe0a1382dc25.48851936';
const exchange = 'WAR';
const ticker = 'ETFBM40TR';
const index = ticker.concat('.',exchange)

// pobranie danych o giełdach
exchangeList(token)
 .then(exchangeData => console.log(exchangeData))
 .catch(error => console.error(error));

 //pobieranie danych dziennych
 interdayData(token)

//wyświetlenie wykresu danych historycznych
historicalStockData(index, token)
  .then(historicalData => {
    let chartData = {
    yAxis: [],
    xAxis: []
};
    for (let i = 0; i < historicalData.length; i++) {
      chartData.yAxis.push(historicalData[i].close);
      chartData.xAxis.push(historicalData[i].date);
    }
    lineChart(chartData.xAxis, chartData.yAxis, ticker)
    //chart.canvas.parentNode.style.height = '1280px';
    //chart.canvas.parentNode.style.width = '1280px';
    return { yAxis: chartData.yAxis, xAxis: chartData.xAxis }
  })
  .then(() => dailyStockData(index, token))
  .then(data => console.log(data))
  .catch(error => console.error(error));

