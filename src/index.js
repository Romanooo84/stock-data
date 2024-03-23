import { lineChart } from "./js/graph";
import { historicalStockData, dailyStockData, exchangeList } from "./js/import_data";

const token = '65fe0a1382dc25.48851936';
const exchange = 'WAR';
const ticker = 'ETFBM40TR';
const index = ticker.concat('.',exchange)

// pobranie danych o giełdach
exchangeList(token)
 .then(exchangeData => console.log(exchangeData))
  .catch(error => console.error(error));

// pobranie danych dziennych
dailyStockData(index, token) 
  .then(dailyData => console.log(dailyData))
  .catch(error => console.error(error));

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
    lineChart(chartData.xAxis, chartData.yAxis)
  })
