
import { exchangeListJson } from "./exchange_list.js";
let selectEx = document.getElementById('select1');
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

selectEx.addEventListener('change', function (event) {
  event.preventDefault()
  let selectedEx=selectEx.options[selectEx.selectedIndex].value
  for (let i = 0; i < exchangeListJson.length;i++)
    if (exchangeListJson[i].Name === selectedEx) {
      select2Options = []
      select2.setData(select2Options)
      exchangeCode = exchangeListJson[i].Code
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

      
