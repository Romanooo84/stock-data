
const token = '65fe0a1382dc25.48851936';
const exchange = 'WAR';
const ticker = 'ETFBM40TR';
const index = ticker.concat('.',exchange)


function dailyStockData(stockIndex,apiKey) {
  // url dla danych codziennych
  const url = `https://eodhd.com/api/real-time/${stockIndex}?api_token=${apiKey}&fmt=json`;

  // Wywołujemy fetch na podanym URL
  return fetch(url)
    .then(response => {
      // Sprawdzamy, czy odpowiedź jest poprawna
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parsujemy odpowiedź jako JSON i zwracamy ją
      return response.json();
    })
    .then(data => {
      // Tutaj możesz pracować na danych, np. wyświetlić je w konsoli
      let dailyData = data;
      return dailyData;
    })
    .catch(error => {
      // W przypadku błędu, np. problemu z siecią, wyświetlamy komunikat o błędzie
      console.error('There was a problem with your fetch operation:', error);
    });
}

function historicalStockData(stockIndex,apiKey) {
  // url dla danych historycznych
  const url = `https://eodhd.com/api/eod/${stockIndex}?period=d&api_token=${apiKey}&fmt=json`;

  // Wywołujemy fetch na podanym URL
  return fetch(url)
    .then(response => {
      // Sprawdzamy, czy odpowiedź jest poprawna
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parsujemy odpowiedź jako JSON i zwracamy ją
      return response.json();
    })
    .then(data => {
      // Tutaj możesz pracować na danych, np. wyświetlić je w konsoli
      //console.log(data);
      let historicalData = data;
      return historicalData
    })
    .catch(error => {
      // W przypadku błędu, np. problemu z siecią, wyświetlamy komunikat o błędzie
      console.error('There was a problem with your fetch operation:', error);
    });
}

dailyStockData(index, token) 
  .then(dailyData => console.log(dailyData))
  .catch(error => console.error(error));

historicalStockData(index, token)
  .then(historicalData => console.log(historicalData))
  .catch(error => console.error(error));
