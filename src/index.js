import { lineChart, createAxis, hideChart, showChart} from "./js/graph.js";
import { historicalStockData, dailyStockData, createDate, news } from "./js/import_data.js";
import { particularData } from "./js/particular_data.js";
import { selectEx, selectTicker, selectOne, slectTwo} from "./js/select.js";
import { linearRegression, bottomPoints, upperPoints } from "./js/math.js";
import { multipleDailyData } from "./js/import_data.js";
import { setHeaderData } from "./js/headerData.js";
import { onClickHeaderButton } from "./js/onClickHeaderButton.js";
import { newParagraph } from "./js/newsParagraph.js";

let dailyData
let historicalData
let newDataChart
let chartData
let delButton
let selectedDate

let exchange = 'WAR';
let ticker = 'ALE';
let index = ticker.concat('.', exchange)
let today = new Date();
let days = 30 
let startDate = new Date(today.getTime() - (days * 24 * 60 * 60 * 1000));
let endDate = createDate(today)
let index1 = 'ALE.WAR'
let index2 = 'GSPC.INDX'
let index3 = 'AAPL.US'
let index4 = 'EURPLN.FOREX'
let index5 = 'USDPLN.FOREX'
const regressionButton = document.querySelector('.regression-button');

export let tickerList = []
export const token = '65fd2d716aebf2.80647901';
export let headerTickersList=[index1, index2, index3, index4, index5]
export const headerData = document.querySelector('.short-data')
export const favButton = document.querySelector('.add-fav-button')
export let button = document.querySelector('.button')
export let inProgres = false

flatpickr("#datepicker", {
  dateFormat: "Y-m-d", // Format daty
maxDate: new Date().fp_incr(0), // Maksymalna dozwolona data (30 dni od dzisiaj)
onClose: function (selectedDates, dateStr) {
  selectedDate = dateStr;
  if (selectedDate != undefined) {
  button.disabled=false
  }
}
});

startDate = createDate(startDate)

if (headerTickersList.length >4){
  favButton.disabled=true
}

multipleDailyData(headerTickersList, token)
  .then(data => {
    setHeaderData(data, headerData)
    delButton = document.querySelectorAll('.delete-button')
  })
  .catch(error => {
    console.error("Wystąpił błąd podczas pobierania danych:", error);
  });

setInterval(() => {
  multipleDailyData(headerTickersList, token)
  .then(data => {
    setHeaderData(data, headerData)
    delButton = document.querySelectorAll('.delete-button')
  })
  .catch(error => {
    console.error("Wystąpił błąd podczas pobierania danych:", error);
  });
},5000
);

historicalStockData(index, token, startDate, endDate)
  .then(data => {
    historicalData = data;
    return dailyStockData(index, token);
  })
  .then(data => {
    dailyData = data;
    return particularData("currentData", index, dailyData, historicalData)
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
    newParagraph(data)
  })


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

button.addEventListener('click', function (event,) {
  event.preventDefault()
  if (selectedDate===undefined){
    selectedDate=startDate}
  historicalStockData(index, token, selectedDate, endDate)
  .then(data => {
    historicalData = data;
    return dailyStockData(index, token);
  })
  .then(data => {
    dailyData = data;
    return particularData("currentData", index, dailyData, historicalData)
  })
  .then(() => { return createAxis(historicalData, dailyData) })
  .then(data => {
    chartData = data
    newDataChart.destroy();
    return lineChart(chartData.xAxis, chartData.yAxis, ticker)
  })
    .then(data => {
      const { regYAxis }=linearRegression(chartData.yAxis)
      upperPoints(regYAxis, chartData.yAxis)
      bottomPoints(regYAxis, chartData.yAxis)
      newDataChart = data
      if (regressionButton.textContent === 'show regression lines')
        {hideChart()}
  })
})

headerData.addEventListener('click',function (event){
  onClickHeaderButton(event)
})

favButton.addEventListener('click', () => {
  console.log(index)
  headerTickersList.push(index)
  multipleDailyData(headerTickersList, token)
  .then(data => {
      setHeaderData(data, headerData)
      if (headerTickersList.length >4){
        favButton.disabled=true
      }
      })
  })

  selectEx.addEventListener('change', function (event) {
    slectTwo(event)
  })

  selectTicker.addEventListener('change', (event) => {
    index=selectOne(event, tickerList)
    
  })
