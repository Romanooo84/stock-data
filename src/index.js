import { lineChart, dataGraph } from "./js/graph.js";
import { historicalStockData, dailyStockData, exchangeList, interdayData } from "./js/import_data.js";
import { particularData } from "./js/particular_data.js";

const token = '65fd2d716aebf2.80647901';
const exchange = 'WAR';
const ticker = 'ETFBM40TR';
const index = ticker.concat('.', exchange)
let chartData

// pobranie danych o giełdach
exchangeList(token)
 .then(exchangeData => console.log(exchangeData))
 .catch(error => console.error(error));

 //pobieranie danych historycznych z interwałem
interdayData(index, token)

//wyświetlenie wykresu danych historycznych
historicalStockData(index, token)
  .then(historicalData => {
    // zainicjowanie listy danych dla osi x i y
    chartData = {
      yAxis: [],
      xAxis: []
    };
    // wstawienie danych do listy danych osi x i y
    for (let i = 0; i < historicalData.length; i++) {
      chartData.yAxis.push(historicalData[i].close);
      chartData.xAxis.push(historicalData[i].date);
    }
    return { chartData }
  })
  .then(()=> {
    dailyStockData(index, token)
      .then(dailyData => {
        dataGraph(dailyData, chartData)
        particularData('currentData', ticker, dailyData.change_p)
        lineChart(chartData.xAxis, chartData.yAxis, ticker)
      })
  })

let button = document.querySelector('.button')
console.log(button)
button.addEventListener('click', function () { console.log(chartData) })
  
const timerId = setInterval(() => {
  dailyStockData(index, token)
  .then(dailyData => {
        dataGraph(dailyData, chartData)
        particularData('currentData', ticker, dailyData.change_p)
    console.log('updated')
      })
}, 50000);
