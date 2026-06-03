import "../assets/styles/weather-modal-detail.css";
export default function WeatherModalDetail({ data, onClose }) {
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const realFeel = data.main.feels_like;
    const cloudiness = data.clouds.all;
    const pressure = data.main.pressure;
    const visibility = data.visibility;
    const description = data.weather[0].description;
    const maxTemp = data.main.temp_max;
    const minTemp = data.main.temp_min;

    return (
        <div className="weather-modal-overlay" onClick={onClose}>
            <div className="weather-modal-detail" onClick={(event) => event.stopPropagation()}>
                <div className="modal-header">
                    <h2>Weather Details</h2>
                    <button className="close-btn" onClick={onClose}>Close</button>
                </div>
                <div className="detail-items">
                    <div className="detail-item"><strong>Humidity:</strong> {humidity}%</div>
                    <div className="detail-item"><strong>Wind Speed:</strong> {windSpeed} m/s</div>
                    <div className="detail-item"><strong>Real Feel:</strong> {realFeel}°C</div>
                    <div className="detail-item"><strong>Cloudiness:</strong> {cloudiness}%</div>
                    <div className="detail-item"><strong>Pressure:</strong> {pressure} hPa</div>
                    <div className="detail-item"><strong>Visibility:</strong> {visibility} meters</div>
                    <div className="detail-item"><strong>Description:</strong> {description}</div>
                    <div className="detail-item"><strong>Max Temperature:</strong> {maxTemp}°C</div>
                    <div className="detail-item"><strong>Min Temperature:</strong> {minTemp}°C</div>
                </div>
            </div>
        </div>
    );
} 