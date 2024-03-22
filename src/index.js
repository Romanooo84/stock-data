// Tworzymy zmienną przechowującą URL, z którego chcemy pobrać dane
const url = 'https://eodhd.com/api/real-time/ETFBM40TR.war?api_token=65fe0a1382dc25.48851936&fmt=json';

// Wywołujemy fetch na podanym URL
fetch(url)
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
    console.log(data);
  })
  .catch(error => {
    // W przypadku błędu, np. problemu z siecią, wyświetlamy komunikat o błędzie
    console.error('There was a problem with your fetch operation:', error);
  });
