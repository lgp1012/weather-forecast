import "../assets/styles/forecast-hourly.css";
import weatherIcons from "../utils/weatherIcons.js";

export default function ForecastHourly({ data }) {
    if (!data) return null;

    //Get the forecast for the current day each 3 hours (limited to 8 forecasts)
    const dataOfTheDay = data.list.map(({ dt, main, weather }) => {
        const date = new Date(dt * 1000);

        const time = date.toLocaleString("vi-VN", {
            timeZone: "Asia/Ho_Chi_Minh",
            hour: "2-digit",
            minute: "2-digit"

        });
        return { time, temp: Math.round(main.temp), weather: weather[0].main };
    }).slice(0, 6);

    return (
        <div className="forecast-hourly-container">
            <h2>Today's Forecasts</h2>
            <div className="forecast-items">
                {dataOfTheDay.map(({ time, temp, weather }, index) =>
                    <div key={`${index}-time`} className="forecast-hourly-item">
                        <p className="forecast-time">{time}</p>
                        <p className="forecast-weather">{weatherIcons[weather]?.name || weather}</p>
                        <img className="forecast-icon" src={weatherIcons[weather].icon} alt={weather} />
                        <p className="forecast-temp">{temp}°C</p>
                    </div>
                )}
            </div>
        </div>
    );
}