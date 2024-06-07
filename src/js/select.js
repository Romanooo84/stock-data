import { exchangeListJson } from "./exchange_list.js";
import { exchangeSymbolList } from "./import_data.js";
export let selectEx = document.getElementById('select1');
export let selectTicker= document.getElementById('select2');
export let select1Options = [{ 'placeholder': true, 'text': 'Select the stock exchange','class': 'custom-color' }]
export let select2Options = [{ 'placeholder': true, 'text': 'First select the stock exchange' ,'class': 'custom-color'}]
export let exchangeSymbols
let select1

const apiKey = '65fd2d716aebf2.80647901';
let usExchangeList=[]

exchangeSymbolList('US', apiKey)
  .then(data => exchangeSymbols = data)
  .then(() => {
    for (let i = 0; i < exchangeSymbols.length; i++) {
      if ((exchangeSymbols[i].Exchange)) {
        if (!usExchangeList.includes(exchangeSymbols[i].Exchange)) {
          usExchangeList.push(exchangeSymbols[i].Exchange)
        }
      }     
    }
    for (let i = 0; i < usExchangeList.length; i++){
      select1Options.push({ text: `Usa Stock:  ${ usExchangeList[i]}` })
    }
  })
  .then(() => {
    for (let i = 0; i < exchangeListJson.length; i++){
      if (exchangeListJson[i].Code != 'US') {
        select1Options.push({ text: exchangeListJson[i].Name })
      }
    }
  })
  .then(() => {
    select1.setData( select1Options)
    }) 

  select1=new SlimSelect({
    select: '#select1',
    data: select1Options,
    options: [

    ]
    })

export let select2=new SlimSelect({
  select: '#select2',
  data: select2Options
})

export const slectTwo=(event)=>{
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
            return tickerList
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
    return tickerList
  }
  }





      
