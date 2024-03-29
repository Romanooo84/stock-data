import { lineChart, dataGraph, updateChart, removeData, createGraph,graphDelete} from "./js/graph.js";
import { historicalStockData, dailyStockData, exchangeList, interdayData } from "./js/import_data.js";
import { particularData } from "./js/particular_data.js";
import { exchangeListJson } from "./js/exchange_list.js";
import { selectEx, select2, selectTicker} from "./js/select.js";
import './js/select.js'
import {us} from './js/exchange_tickers/us.js'

const token = '65fd2d716aebf2.80647901';
let exchange = 'WAR';
let ticker = 'ACP';
let index = ticker.concat('.', exchange)
let tickerList
let wykres


// pobranie danych o giełdach
/*exchangeList(token)
 .then(exchangeData => console.log(exchangeData))
 .catch(error => console.error(error));
*/

 //pobieranie danych historycznych z interwałem
//interdayData(index, token)



createGraph(index, token, ticker)
  .then(newDataChart => {
  wykres = newDataChart
  return wykres})
 

let button = document.querySelector('.button')
button.addEventListener('click', function (event,) {
  event.preventDefault()
  console.log(wykres)
  graphDelete(wykres)
  createGraph(index, token, ticker)
  .then(newDataChart => {
  wykres = newDataChart
  return wykres})
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
      console.log(tickerList[0].Name)
      for (let i = 0; i <= tickerList.length;  i++){
        if (selectedTicker != tickerList[i].Name) {
        }
        else {
          ticker=tickerList[i].Code
          exchange = tickerList[i].Exchange
          index = ticker.concat('.', exchange)
          console.log(index)
        }
      }
    }
  })
