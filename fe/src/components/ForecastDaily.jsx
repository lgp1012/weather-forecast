import "../assets/styles/forecast-daily.css";
import weatherIcons from "../utils/weatherIcons.js";

export default function ForecastDaily() {
    const fakeDays = [
        { day: "Today", weather: weatherIcons["Clear"].name, icon: weatherIcons.Clear.icon, temps: "36 / 22" },
        { day: "Tue", weather: weatherIcons["Clear"].name, icon: weatherIcons.Clear.icon, temps: "37 / 21" },
        { day: "Wed", weather: weatherIcons["Clear"].name, icon: weatherIcons.Clear.icon, temps: "37 / 21" },
        { day: "Thu", weather: weatherIcons["Clouds"].name, icon: weatherIcons.Clouds.icon, temps: "37 / 21" },
        { day: "Fri", weather: weatherIcons["Clouds"].name, icon: weatherIcons.Clouds.icon, temps: "37 / 21" },
        { day: "Sat", weather: weatherIcons["Rain"].name, icon: weatherIcons.Rain.icon, temps: "37 / 21" },
        { day: "Sun", weather: weatherIcons["Clear"].name, icon: weatherIcons.Clear.icon, temps: "37 / 21" },
    ];

    return (
        <div className="forecast-daily-container">
            <h3>7-DAY FORECAST</h3>
            <div className="daily-list">
                {fakeDays.map((item) => (
                    <div className="daily-item" key={item.day}>
                        <div className="daily-day">{item.day}</div>
                        <div className="daily-weather">
                            <img className="daily-icon" src={item.icon} alt={item.weather} />
                            <span>{item.weather}</span>
                        </div>
                        <div className="daily-temps">{item.temps}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}