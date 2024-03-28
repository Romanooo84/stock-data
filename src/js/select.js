import { exchangeListJson } from "./exchange_list.js";
export let selectEx = document.getElementById('select1');
export let select1Options = [{ 'placeholder': true, 'text': 'Select the stock exchange' }]
export let select2Options = []

for (let i = 0; i < exchangeListJson.length; i++){
  select1Options.push({ text: `${exchangeListJson[i].Name}` })
}

let select1=new SlimSelect({
  select: '#select1',
  data: select1Options
})

export let select2=new SlimSelect({
  select: '#select2',
  data: select2Options
})



      
