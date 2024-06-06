import { lineChart, createAxis, hideChart, showChart} from "./js/graph.js";
import { historicalStockData, dailyStockData, createDate, news } from "./js/import_data.js";
import { particularData } from "./js/particular_data.js";
import { exchangeListJson } from "./js/exchange_list.js";
import { selectEx, select2, selectTicker, exchangeSymbols } from "./js/select.js";
import { linearRegression, bottomPoints, upperPoints } from "./js/math.js";
import { multipleDailyData } from "./js/import_data.js";
import { setHeaderData } from "./js/headerData.js";
import { onClickHeaderButton } from "./js/onClickHeaderButton.js";



let dailyData
let historicalData
let newDataChart
let chartData
let endDate
let tickerList

export const token = '65fd2d716aebf2.80647901';
let exchange = 'WAR';
let ticker = 'ALE';
let index = ticker.concat('.', exchange)
let today = new Date();
let days = 30 
let startDate = new Date(today.getTime() - (days * 24 * 60 * 60 * 1000));
let index1 = 'ALE.WAR'
let index2 = 'GSPC.INDX'
let index3 = 'AAPL.US'
let index4 = 'EURPLN.FOREX'
let index5 = 'USDPLN.FOREX'
let delButton 
let selectedDate

endDate = createDate(today)
startDate = createDate(startDate)

export const headerTickersList=[index1, index2, index3, index4, index5]
export const headerData = document.querySelector('.short-data')
export const favButton = document.querySelector('.add-fav-button')
export let button = document.querySelector('.button')

flatpickr("#datepicker", {
  dateFormat: "Y-m-d", // Format daty
  maxDate: new Date().fp_incr(0), // Maksymalna dozwolona data (30 dni od dzisiaj)
  onClose: function (selectedDates, dateStr) {
    selectedDate = dateStr;
}
});

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

setInterval(()=> {
  multipleDailyData(headerTickersList, token)
  .then(data => {
    setHeaderData(data, headerData)
    delButton = document.querySelectorAll('.delete-button')
  })
  .catch(error => {
    console.error("Wystąpił błąd podczas pobierania danych:", error);
  });
},2000
);

headerData.addEventListener('click',function (event){
  onClickHeaderButton(event, headerTickersList)
})

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
    let paragraph = document.querySelector("#news")
    const markup=data.map((article)=>
      `<div class='newsCotainer'>  
        <div class='newsDiv'>
          <h2>${article.title}</h2>
          <p>${article.date}</p>
          <div class='div-afterp'>
            <p>${article.content}</p>
          </div>
        </div>
      </div>`)
    .join("");
    paragraph.insertAdjacentHTML("beforeend", markup);
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

favButton.addEventListener('click', () => {
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
  else if (selectedEx.includes('Usa Stock:')) {
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
          if (tickerList[i].Country === 'USA' && tickerList[i].Exchange!=='INDX') {
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
