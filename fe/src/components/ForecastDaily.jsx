import "../assets/styles/forecast-daily.css";

export default function ForecastDaily({ data }) {
    if (!data?.length) return null;

    return (
        <div className="forecast-daily-container">
            <h3>5-DAY FORECAST</h3>
            <div className="daily-list">
                {data.map((item) => (
                    <div className="daily-item" key={item.dateKey}>
                        <div className="daily-day">{item.day}</div>

                        <div className="daily-weather">
                            <img className="daily-icon" src={item.icon} alt={item.weatherLabel} />
                            <span>{item.weatherLabel}</span>
                        </div>

                        <div className="daily-temps">{item.temp}°C</div>
                    </div>
                ))}
            </div>
        </div>
    );
}