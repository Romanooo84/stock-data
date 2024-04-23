 //pobieranie danych historycznych
export function historicalStockData(stockIndex,apiKey, startDate, endDate) {
  // url dla danych historycznych
  const url = `https://eodhd.com/api/eod/${stockIndex}?from=${startDate}&to=${endDate}&period=d&api_token=${apiKey}&fmt=json`;  
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
      let realTimeDay= new Date(data.timestamp * 1000);
      realTimeDay = createDate(realTimeDay)
      close = data.close
      let change_p = data.change_p
      return { realTimeDay, close, change_p };
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
      let exchangeData = data;
      return exchangeData;
    })
    .catch(error => {
      // W przypadku błędu, np. problemu z siecią, wyświetlamy komunikat o błędzie
      console.error('There was a problem with your fetch operation:', error);
    });
}

export function exchangeSymbolList(exchange,apiKey) {
  const url = `https://eodhd.com/api/exchange-symbol-list/${exchange}?api_token=${apiKey}&fmt=json`
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
      let exchangeSymbols = data;
      return exchangeSymbols;
    })
    .catch(error => {
      // W przypadku błędu, np. problemu z siecią, wyświetlamy komunikat o błędzie
      console.error('There was a problem with your fetch operation:', error);
    });
}

// pobieranie danych historycznych z interwałem 5m
export function interdayData(stockIndex, apiKey) {
  const url = `https://eodhd.com/api/intraday/${stockIndex}?interval=5m&api_token=${apiKey}&fmt=json`
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
      let interdayData = data;
      return interdayData;
    })
    .catch(error => {
      // W przypadku błędu, np. problemu z siecią, wyświetlamy komunikat o błędzie
      console.error('There was a problem with your fetch operation:', error);
    });
}

export function news(stockIndex, apiKey) {
  const url = `https://eodhd.com/api/news?${stockIndex}S&offset=0&limit=10&api_token=${apiKey}&fmt=json`
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
    return data
  })
  .catch(error => {
    // W przypadku błędu, np. problemu z siecią, wyświetlamy komunikat o błędzie
    console.error('There was a problem with your fetch operation:', error);
  });
}

export function createDate(date) {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2); // Dodanie 1, bo getMonth() zwraca miesiące od 0 do 11, oraz formatowanie do dwóch cyfr
  const day = ('0' + date.getDate()).slice(-2); // Formatowanie do dwóch cyfr
  date = `${year}-${month}-${day}`;
  return date
}



