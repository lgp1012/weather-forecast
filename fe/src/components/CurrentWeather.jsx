import weatherIcons from "../utils/weatherIcons.js";
import "../assets/styles/current-weather.css";

export default function CurrentWeather({ city, data }) {
    if (!data) {
        return null;
    }

    const tempC = data.main.temp;
    const weatherCurr = data.weather[0].main;

    return (
        <div className="current-weather-container">
            <div className="current-weather-info">
                <h2 id="city-name">{city}</h2>
                <p id="weather-description">{weatherIcons[weatherCurr]?.name || weatherCurr}</p>
                <p id="temperature">{tempC}°C</p>
            </div>
            <img id="weather-icon" src={weatherIcons[weatherCurr].icon} alt={weatherCurr} />
        </div>
    );
}