import { lineChart, createAxis, hideChart, showChart} from "./js/graph.js";
import { historicalStockData, dailyStockData, createDate, news } from "./js/import_data.js";
import { particularData } from "./js/particular_data.js";
import { exchangeListJson } from "./js/exchange_list.js";
import { selectEx, select2, selectTicker, exchangeSymbols } from "./js/select.js";
import { linearRegression, bottomPoints, upperPoints } from "./js/math.js";
import './js/select.js'
import './js/date-time'
import { selectedDate } from "./js/date-time";

let dailyData
let historicalData
let newDataChart
let chartData
let endDate
let tickerList
let intervalId

const token = '65fd2d716aebf2.80647901';
let exchange = 'WAR';
let ticker = 'ALE';
let index = ticker.concat('.', exchange)
let today = new Date();
let days = 30 
let startDate = new Date(today.getTime() - (days * 24 * 60 * 60 * 1000));

endDate = createDate(today)
startDate = createDate(startDate)


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
     const { regYAxis }=linearRegression(chartData.yAxis)
    upperPoints(regYAxis, chartData.yAxis)
    bottomPoints (regYAxis, chartData.yAxis)
    newDataChart = data
  })
  .then(()=>{return news(index, token)})
  .then(data=>{
    let paragraph = document.querySelector("#news")
    const markup=data.map((article)=>
      `<h2>${article.title}</h2><p>${article.date}</p><p>${article.content}</p>`)
    .join("");
    paragraph.insertAdjacentHTML("beforeend", markup);
  })

  const graphInterval = () => {
    intervalId=setInterval(() => {
      console.log('działa')
      dailyStockData(index, token)
        .then(data => {
          dailyData = data;
          return particularData("currentData", index, dailyData);
        })
        .then(() => createAxis(historicalData, dailyData))
        .then(data => {
          chartData = data;
          console.log(chartData)
          newDataChart.data.datasets[0].data = chartData.yAxis;
          newDataChart.update();
          /*const { regYAxis } = linearRegression(chartData.yAxis);
          upperPoints(regYAxis, chartData.yAxis);
          bottomPoints(regYAxis, chartData.yAxis);*/
        })
        .catch(error => {
          console.error('Błąd:', error);
        });
    }, 5000);
  };

  graphInterval()


export let button = document.querySelector('.button')
button.disabled=true
button.addEventListener('click', function (event,) {
  event.preventDefault()
  clearInterval(intervalId);
  historicalStockData(index, token, selectedDate, endDate)
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
    newDataChart.destroy()
    return lineChart(chartData.xAxis, chartData.yAxis, ticker)
  })
    .then(data => {
      const { regYAxis }=linearRegression(chartData.yAxis)
      upperPoints(regYAxis, chartData.yAxis)
      bottomPoints(regYAxis, chartData.yAxis)
      if (regressionButton.textContent === 'show regression lines')
        {hideChart()}
  })
  .then(()=>{return news(index, token)})
  .then(data=>{
    let paragraph = document.querySelector("#news")
    console.log(data)
  })
})

const regressionButton = document.querySelector('.regression-button');
regressionButton.addEventListener('click', function (event) {
  event.preventDefault()
  if (regressionButton.textContent === 'hide regression lines') {
    hideChart()
    regressionButton.textContent = 'show regression lines'
  }
  else if (regressionButton.textContent === 'show regression lines') {
    showChart()
    regressionButton.textContent = 'hide regression lines'
  }
})
  

selectEx.addEventListener('change', function (event) {
  event.preventDefault()
  let select2Options = []
  let selectedEx = selectEx.options[selectEx.selectedIndex].value
  if (!selectedEx.includes('Usa Stock:')) {
    for (let i = 0; i < exchangeListJson.length; i++) {
      if (exchangeListJson[i].Name === selectedEx) {
        let exchange = exchangeListJson[i].Code
        fetch(`https://eodhd.com/api/exchange-symbol-list/${exchange}?api_token=65fd2d716aebf2.80647901&fmt=json`)
          .then(data => data.json())
          .then(data => {
            tickerList = data
            for (let i = 0; i < data.length; i++) {
              select2Options.push({ text: `${data[i].Name}` })
            }
            select2.setData(select2Options)
          })
      }
    }
  }
  else {
    for (let i = 0; i < exchangeSymbols.length; i++) {
      if (selectedEx.includes(exchangeSymbols[i].Exchange)) {
            select2Options.push({ text: `${exchangeSymbols[i].Name}` })
      }
    }
    tickerList = exchangeSymbols
    select2.setData(select2Options)
  }
  })

  selectTicker.addEventListener('change', (event) => {
  event.preventDefault();
    if (selectTicker.options[selectTicker.selectedIndex] != undefined) {
      let selectedTicker = selectTicker.options[selectTicker.selectedIndex].value;
      for (let i = 0; i < tickerList.length;  i++){
        if (selectedTicker != tickerList[i].Name) {
        }
        else {
          ticker = tickerList[i].Code
          if (tickerList[i].Country === 'USA') {
            exchange = 'US'
          }
          else {
            exchange = tickerList[i].Exchange
          }
          index = ticker.concat('.', exchange)

        }
      }
    }
  })
