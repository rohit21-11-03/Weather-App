const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

function getWeather(city) {
    const apiKey = 'b07597f1e84dd32a4423bf49474c9596';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    const weatherOutput = document.getElementById('weather-output');
    if (data.cod === 200) {
        const { name, main, weather } = data;
        weatherOutput.innerHTML = `
            <h2>${name}</h2>
            <p>Temperature: ${main.temp}°C</p>
            <p>Condition: ${weather[0].description}</p>
        `;
    } else {
        weatherOutput.innerHTML = `<p>Location not found. Please try again.</p>`;
    }
}

document.getElementById('search-btn').addEventListener('click', () => {
    const locationInput = document.getElementById('location-input').value;
    getWeather(locationInput);
});
