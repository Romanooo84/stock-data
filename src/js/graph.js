
export function lineChart(xAxis, yAxis, ticker) {
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: xAxis,
      datasets: [{
        label: ticker,
        data: yAxis,
        borderWidth: 1
      }]
    },
    options: {
    }
  });

}

// pobranie danych do wykresu

export function dataGraph(dailyData, historicalData) {
  //przetworzenie bieżacej daty z unix na normalną
        let currentDateUnix = dailyData.timestamp // pobranie daty
        let currentDate = new Date(currentDateUnix * 1000) //przerobienie daty
        // wybranie roku miesiąca i dnia
        const year = currentDate.getFullYear();
        const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Dodanie 1, bo getMonth() zwraca miesiące od 0 do 11, oraz formatowanie do dwóch cyfr
        const day = ('0' + currentDate.getDate()).slice(-2); // Formatowanie do dwóch cyfr
        currentDate = `${year}-${month}-${day}`;
        // pobranie ostatniej daty z osi czasu
        let lastAxisDate = historicalData.xAxis[historicalData.xAxis.length - 1]
        // sprawdzenie dat
        if (currentDate > lastAxisDate) {
          historicalData.xAxis.push(currentDate)
          historicalData.yAxis.push(dailyData.close)
        }
        else if(currentDate === lastAxisDate) {
          historicalData.yAxis.pop()
          historicalData.yAxis.push(dailyData.close)
        }
}

