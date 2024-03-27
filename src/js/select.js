
import { exchangeListJson } from "./exchange_list.js";

let select1Options = [{ 'placeholder': true, 'text': 'Select the stock exchange' }]
let select2Options = []

for (let i = 0; i < exchangeListJson.length; i++){
  select1Options.push({ text: `${exchangeListJson[i].Name}` })
}

let select1=new SlimSelect({
  select: '#select1',
  data: select1Options
})

let select2=new SlimSelect({
  select: '#select2',
  data: select2Options
})

return {select1, select2}

      
