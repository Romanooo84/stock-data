import { exchangeListJson } from "./exchange_list.js";
import { exchangeSymbolList } from "./import_data.js";
export let selectEx = document.getElementById('select1');
export let selectTicker= document.getElementById('select2');
export let select1Options = [{ 'placeholder': true, 'text': 'Select the stock exchange' }]
export let select2Options = [{ 'placeholder': true, 'text': 'First select the stock exchange' }]
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
    data: select1Options
    })



export let select2=new SlimSelect({
  select: '#select2',
  data: select2Options
})




      
