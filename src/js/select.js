
import { exchangeListJson } from "./exchange_list.js";

console.log(exchangeListJson[0].Code)

let selectLabels = []

for (let i = 0; i < exchangeListJson.length; i++){
  console.log(`https://eodhd.com/api/exchange-symbol-list/${exchangeListJson[i].Code}?api_token=65fd2d716aebf2.80647901&fmt=csv`)
 selectLabels.push({text:`${exchangeListJson[i].Name}`})
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
