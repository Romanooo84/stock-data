import { lineChart, createAxis, hideChart, showChart} from "./js/graph.js";
import { historicalStockData, dailyStockData, createDate, news } from "./js/import_data.js";
import { particularData } from "./js/particular_data.js";
import { exchangeListJson } from "./js/exchange_list.js";
import { selectEx, select2, selectTicker, exchangeSymbols } from "./js/select.js";
import { linearRegression, bottomPoints, upperPoints } from "./js/math.js";
import './js/select.js'
import './js/date-time'
import { multipleDailyData } from "./js/import_data.js";

let dailyData
let historicalData
let newDataChart
let chartData
let endDate
let tickerList

const token = '65fd2d716aebf2.80647901';
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

endDate = createDate(today)
startDate = createDate(startDate)

let headerTickersList=[index1, index2, index3, index4, index5]
let headerData = document.querySelector('.short-data')
const favButton = document.querySelector('.add-fav-button')

if (headerTickersList.length >4){
  favButton.disabled=true
}

multipleDailyData(headerTickersList, token)
  .then(data => {
    let newData = data
    headerData.innerHTML = ''
    const markup = newData.map((ticker) => {
    let changeColor = ''; // Initialize changeColor variable
    if (ticker.change_p > 0) {
        changeColor = 'value-plus';
    } else if (ticker.change_p < 0) {
        changeColor = 'value-minus';
    }
    return `<div class='short-data-div'>
                <button class = 'delete-button'  type="button" id="${ticker.code}" >
                <svg id = '${ticker.code}' version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill = '#ec7c7c'>
                  <path name = '${ticker.code}' d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"></path>
                  <path name = '${ticker.code}' d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"></path>
                </svg>
              </button>
              <div class='single-data' name = '${ticker.code}'>
                <p class='header-paragraph'>${ticker.code}</p>
                <p class='header-paragraph'>Close: ${ticker.close}</p>
                <p class='header-paragraph'>Change: <span class='${changeColor}'>${ticker.change_p}%</span></p>
              </div>          
            </div>`;
  }).join("");
      // Wstawianie wygenerowanego kodu HTML do elementu headerData
      headerData.insertAdjacentHTML("beforeend", markup);
      delButton = document.querySelectorAll('.delete-button')
  })
  .catch(error => {
    console.error("Wystąpił błąd podczas pobierania danych:", error);
  });

setInterval(()=> {
multipleDailyData(headerTickersList, token)
  .then(data => {
    let newData = data
    let changeColor = '';
    newData.forEach(element => {
      element.change_p>0? changeColor='value-plus':changeColor='value-minus'
    });
    headerData.innerHTML = ''
    const markup = newData.map((ticker) => {
    let changeColor = ''; // Initialize changeColor variable
    if (ticker.change_p > 0) {
        changeColor = 'value-plus';
    } else if (ticker.change_p < 0) {
        changeColor = 'value-minus';
      }
      return `<div class='short-data-div'>
                <button class = 'delete-button'  type="button" id="${ticker.code}" >
                <svg id = '${ticker.code}' version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill = '#ec7c7c'>
                  <path name = '${ticker.code}' d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"></path>
                  <path name = '${ticker.code}' d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"></path>
                </svg>
              </button>
              <div class='single-data' name = '${ticker.code}'>
                <p class='header-paragraph'>${ticker.code}</p>
                <p class='header-paragraph'>Close: ${ticker.close}</p>
                <p class='header-paragraph'>Change: <span class='${changeColor}'>${ticker.change_p}%</span></p>
              </div>          
            </div>`;
  }).join(""); 
      // Wstawianie wygenerowanego kodu HTML do elementu headerData
      headerData.insertAdjacentHTML("beforeend", markup);
  })
  .catch(error => {
    console.error("Wystąpił błąd podczas pobierania danych:", error);
  });
},2000
);

headerData.addEventListener('click',function (event){
    event.preventDefault()
    let tickerToDelete=event.target.parentNode.id
    headerTickersList = headerTickersList .filter(ticker => ticker !== tickerToDelete);
    multipleDailyData(headerTickersList, token)
    .then(data => {
      let newData = data
      const markup = newData.map((ticker) => {
      let changeColor = ''; // Initialize changeColor variable
      if (ticker.change_p > 0) {
          changeColor = 'value-plus';
      } else if (ticker.change_p < 0) {
          changeColor = 'value-minus';
      }
      return `<div class='short-data-div'>
                  <button class = 'delete-button'  type="button" id="${ticker.code}" >
                  <svg id = '${ticker.code}' version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill = '#ec7c7c'>
                    <path name = '${ticker.code}' d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"></path>
                    <path name = '${ticker.code}' d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"></path>
                  </svg>
                </button>
                <div class='single-data' name = '${ticker.code}'>
                  <p class='header-paragraph'>${ticker.code}</p>
                  <p class='header-paragraph'>Close: ${ticker.close}</p>
                  <p class='header-paragraph'>Change: <span class='${changeColor}'>${ticker.change_p}%</span></p>
                </div>
              </div>`;
      }).join("");
        // Wstawianie wygenerowanego kodu HTML do elementu headerData
        headerData.innerHTML = ''
        headerData.insertAdjacentHTML("beforeend", markup);
        delButton = document.querySelectorAll('.delete-button')    
        if (delButton.length<3){
        for (var i = 0; i < delButton.length; i++) {
          delButton[i].disabled = true;
      }}
      if (headerTickersList.length <5){
        favButton.disabled=false
      }
      })
    .catch(error => {
      console.error("Wystąpił błąd podczas pobierania danych:", error);
    });
})

historicalStockData(index, token, startDate, endDate)
  .then(data => {
    historicalData = data;
    return dailyStockData(index, token);
  })
  .then(data => {
    dailyData = data;
    console.log(dailyData)
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
      `<div class='newsDiv'><h2>${article.title}</h2><p>${article.date}</p><div class='div-afterp'><p>${article.content}</p></div></div>`)
    .join("");
    paragraph.insertAdjacentHTML("beforeend", markup);
  })

export let button = document.querySelector('.button')
button.addEventListener('click', function (event,) {
  event.preventDefault()
  let selectedDate
  historicalStockData(index, token, selectedDate=startDate, endDate)
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

favButton.addEventListener('click',()=> {
  headerTickersList.push(index)
  multipleDailyData(headerTickersList, token)
  .then(data => {
    let newData = data
    headerData.innerHTML = ''
    const markup = newData.map((ticker) => {
    let changeColor = ''; // Initialize changeColor variable
    if (ticker.change_p > 0) {
        changeColor = 'value-plus';
    } else if (ticker.change_p < 0) {
        changeColor = 'value-minus';
    }
    return `<div class='short-data-div'>
                <button class = 'delete-button'  type="button" id="${ticker.code}" >
                <svg id = '${ticker.code}' version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill = '#ec7c7c'>
                  <path name = '${ticker.code}' d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"></path>
                  <path name = '${ticker.code}' d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"></path>
                </svg>
              </button>
              <div class='single-data' name = '${ticker.code}'>
                <p class='header-paragraph'>${ticker.code}</p>
                <p class='header-paragraph'>Close: ${ticker.close}</p>
                <p class='header-paragraph'>Change: <span class='${changeColor}'>${ticker.change_p}%</span></p>
              </div>
             
            </div>`;
  }).join("");
      // Wstawianie wygenerowanego kodu HTML do elementu headerData
      headerData.innerHTML = ''
      headerData.insertAdjacentHTML("beforeend", markup);
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
