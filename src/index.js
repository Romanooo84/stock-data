import { lineChart } from "./js/graph.js";
import { historicalStockData, dailyStockData, exchangeList, interdayData } from "./js/import_data.js";

const token = '65fd2d716aebf2.80647901';
const exchange = 'WAR';
const ticker = 'ETFBM40TR';
const index = ticker.concat('.',exchange)

// pobranie danych o giełdach
exchangeList(token)
 .then(exchangeData => console.log(exchangeData))
 .catch(error => console.error(error));

 //pobieranie danych historycznych z interwałem
interdayData(index, token)
 
// pobieranie aktualnych danych
/*dailyStockData(index, token)
  .then(dailyData => {
    return {change: dailyData.change, change_p: dailyData.change_p, close: dailyData.close, time: dailyData.timestamp}
  })
  .catch(error => console.error(error));
*/

//wyświetlenie wykresu danych historycznych
historicalStockData(index, token)
  .then(historicalData => {
    // zainicjowanie listy danych dla osi x i y
    let chartData = {
      yAxis: [],
      xAxis: []
    };
    // wstawienie danych do listy danych osi x i y
    for (let i = 0; i < historicalData.length; i++) {
      chartData.yAxis.push(historicalData[i].close);
      chartData.xAxis.push(historicalData[i].date);
    }
    return { yAxis: chartData.yAxis, xAxis: chartData.xAxis }
  })
  .then(data => {
    dailyStockData(index, token)
      .then(dailyData => {
        //przetworzenie bieżacej daty z unix na normalną
        let currentDateUnix = dailyData.timestamp // pobranie daty
        let currentDate = new Date(currentDateUnix * 1000) //przerobienie daty
        // wybranie roku miesiąca i dnia
        const year = currentDate.getFullYear();
        const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Dodanie 1, bo getMonth() zwraca miesiące od 0 do 11, oraz formatowanie do dwóch cyfr
        const day = ('0' + currentDate.getDate()).slice(-2); // Formatowanie do dwóch cyfr
        currentDate = `${year}-${month}-${day}`;
        // pobranie ostatniej daty z osi czasu
        let lastAxisDate = data.xAxis[data.xAxis.length - 1]
        // sprawdzenie dat
        if (currentDate > lastAxisDate) {
          console.log("data bieżąca jest większa od ostatniego dnia na osi czasu")
          data.xAxis.push(currentDate)
          data.yAxis.push(dailyData.close)
        }
        else if(currentDate === lastAxisDate) {
          data.yAxis.pop()
          data.yAxis.push(dailyData.close)
        }
        lineChart(data.xAxis, data.yAxis, ticker)
      })
  })
  
    
 

