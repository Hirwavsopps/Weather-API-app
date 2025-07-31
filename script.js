const apiKey = '8e08f35e9e562fd0db2acef0ae74ac32'; // Your OpenWeatherMap API key

const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const weatherResult = document.getElementById('weather-result');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  weatherResult.textContent = 'Loading...';

  // Build the API URL with city name, units in metric (Celsius), and API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        // City not found or other error
        throw new Error('City not found or API error');
      }
      return response.json();
    })
    .then(data => {
      displayWeather(data);
    })
    .catch(err => {
      weatherResult.textContent = `Error: ${err.message}`;
    });
});

function displayWeather(data) {
  weatherResult.innerHTML = `
    <h2>Weather in ${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}
console.log('Searching weather for:', city);

fetch(url)
  .then(response => {
    console.log('API response status:', response.status);
    if (!response.ok) {
      throw new Error('City not found or API error');
    }
    return response.json();
  })
  .then(data => {
    console.log('API data:', data);
    displayWeather(data);
  })
  .catch(err => {
    console.error('Fetch error:', err);
    weatherResult.textContent = `Error: ${err.message}`;
  });
