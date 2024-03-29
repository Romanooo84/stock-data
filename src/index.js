import { lineChart, dataGraph, updateChart, removeData, createGraph } from "./js/graph.js";
import { historicalStockData, dailyStockData, exchangeList, interdayData } from "./js/import_data.js";
import { particularData } from "./js/particular_data.js";
import { exchangeListJson } from "./js/exchange_list.js";
import { selectEx, select2, selectTicker} from "./js/select.js";
import './js/select.js'
import {us} from './js/exchange_tickers/us.js'

const token = '65fd2d716aebf2.80647901';
const exchange = 'WAR';
const ticker = 'ACP';
const index = ticker.concat('.', exchange)
let tickerList

// pobranie danych o giełdach
/*exchangeList(token)
 .then(exchangeData => console.log(exchangeData))
 .catch(error => console.error(error));
*/

 //pobieranie danych historycznych z interwałem
//interdayData(index, token)



createGraph(index, token, ticker)
 

let button = document.querySelector('.button')
button.addEventListener('click', function (event) {
  event.preventDefault()
})
  

selectEx.addEventListener('change', function (event) {
  event.preventDefault()
  let selectedEx=selectEx.options[selectEx.selectedIndex].value
  for (let i = 0; i < exchangeListJson.length; i++)
    if (exchangeListJson[i].Name === selectedEx) {
      let select2Options = []
      select2.setData(select2Options)
      let exchange = exchangeListJson[i].Code
        fetch(`https://eodhd.com/api/exchange-symbol-list/${exchange}?api_token=65fd2d716aebf2.80647901&fmt=json`)
          .then(data => data.json())
          .then(data => {
            tickerList=data
            for (let i = 0; i < data.length; i++) {
              select2Options.push({ text: `${data[i].Name}` })
            }
            select2.setData(select2Options)
            return (tickerList)
          })
  }
})

selectTicker.addEventListener('change', (event) => {
  event.preventDefault();
  
    if (selectTicker.options[selectTicker.selectedIndex] != undefined) {
      let selectedTicker = selectTicker.options[selectTicker.selectedIndex].value;
      console.log(selectedTicker)
      console.log(tickerList)
    }
  })
