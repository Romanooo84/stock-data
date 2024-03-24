 //pobieranie danych historycznych
export function historicalStockData(stockIndex,apiKey) {
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

//pobieranie danych codziennych
export function dailyStockData(stockIndex,apiKey) {
  // url dla danych codziennych
  const url = `https://eodhd.com/api/real-time/${stockIndex}?api_token=${apiKey}&fmt=json`;
  console.log('start')
  console.log(url)
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

//pobieranie listy obsługiwanych giełd
export function exchangeList(apiKey) {
  const url = `https://eodhd.com/api/exchanges-list/?api_token=${apiKey}&fmt=json`
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
      let exchangeData = data;
      return exchangeData;
    })
    .catch(error => {
      // W przypadku błędu, np. problemu z siecią, wyświetlamy komunikat o błędzie
      console.error('There was a problem with your fetch operation:', error);
    });
}

