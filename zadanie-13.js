async function getWeather(latitude, longitude) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Błąd HTTP: ${response.status}`);
    }

    const data = await response.json();

    const temperature = data.current.temperature_2m;
    const windSpeed = data.current.wind_speed_10m;

    console.log(`Pogoda dla współrzędnych ${latitude}, ${longitude}`);
    console.log(`Temperatura: ${temperature}°C`);
    console.log(`Prędkość wiatru: ${windSpeed} km/h`);
  } catch (error) {
    console.log("Nie udało się pobrać danych pogodowych.");
    console.log(`Szczegóły błędu: ${error.message}`);
  }
}

getWeather(50.29, 19.10);
