import { lineChart, dataGraph, updateChart, removeData, createGraph } from "./js/graph.js";
import { historicalStockData, dailyStockData, exchangeList, interdayData } from "./js/import_data.js";
import { particularData } from "./js/particular_data.js";
import { exchangeListJson } from "./js/exchange_list.js";
import { selectEx, select2 } from "./js/select.js";
import './js/select.js'

const token = '65fd2d716aebf2.80647901';
const exchange = 'US';
const ticker = 'AAPL';
const index = ticker.concat('.', exchange)
let chartData
let newDataChart

// pobranie danych o giełdach
/*exchangeList(token)
 .then(exchangeData => console.log(exchangeData))
 .catch(error => console.error(error));
*/

 //pobieranie danych historycznych z interwałem
//interdayData(index, token)


createGraph()

let button = document.querySelector('.button')
button.addEventListener('click', function (event) {
  event.preventDefault()
  console.log(chartData)
})
  
const timerId = setInterval(() => { 
  dailyStockData(index, token)
  .then(dailyData => {
    dataGraph(dailyData, chartData)
    particularData('currentData', ticker, dailyData.change_p)
  })
  
  newDataChart.options.animation = false;
  newDataChart.update()

}, 60000);

selectEx.addEventListener('change', function (event) {
  event.preventDefault()
  let selectedEx=selectEx.options[selectEx.selectedIndex].value
  for (let i = 0; i < exchangeListJson.length;i++)
    if (exchangeListJson[i].Name === selectedEx) {
      let select2Options = []
      select2.setData(select2Options)
      let exchangeCode = exchangeListJson[i].Code
      fetch(`https://eodhd.com/api/exchange-symbol-list/${exchangeCode}?api_token=65fd2d716aebf2.80647901&fmt=json`)
        .then(data => data.json())
        .then(data => {
          for (let i = 0; i < data.length; i++) {
            select2Options.push({ text: `${ data[i].Name }`})
          }
          return(select2Options)
        })
        .then(select2Options=>select2.setData(select2Options))
  }
})




