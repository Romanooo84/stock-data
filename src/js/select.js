
import { exchangeListJson } from "./exchange_list.js";

console.log(exchangeListJson[0].Code)

let selectLabels = []

for (let i = 0; i < exchangeListJson.length; i++){
  console.log(`https://eodhd.com/api/exchange-symbol-list/${exchangeListJson[i].Code}?api_token=65fd2d716aebf2.80647901&fmt=json`)
  fetch(`https://eodhd.com/api/exchange-symbol-list/${exchangeListJson[i].Code}?api_token=65fd2d716aebf2.80647901&fmt=json`)
    .then(data => data.json())
    .then(data=> JSON.stringify(data))
    .then(data=>localStorage.setItem([i], data))
}





new SlimSelect({
  select: '#select',
  data: selectLabels
    /*{
      label: 'Animals',
      options: [
        {text: 'Cat'},
        {text: 'Dog'},
        {text: 'Bird'}
      ]
    },
    {
      label: 'Animals',
      options: [
        {text: 'Cat'},
        {text: 'Dog'},
        {text: 'Bird'}
      ]
    }*/
      })