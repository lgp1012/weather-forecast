import { useState } from 'react';
import WeatherModalDetail from '../components/WeatherModalDetail';
import '../assets/styles/weather-parameters.css';

export default function WeatherParameters({ data }) {
    const [showSeeMore, setShowSeeMore] = useState(false);

    if (!data) {
        return null;
    }

    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const realFeel = data.main.feels_like;
    const cloudiness = data.clouds.all;


    function handleClickSeeMore() {
        // Logic to show the SeeMoreBox, e.g., toggle a state variable
        setShowSeeMore(!showSeeMore);
    }

    return (
        <div className="weather-parameters-container">
            <h2>Air Conditions</h2>
            <button className="see-more-btn" onClick={handleClickSeeMore}>
                See more
            </button>
            <div className="parameters">
                <div className="parameter-item">
                    <label htmlFor="humidity">Humidity:</label>
                    <span id="humidity">{humidity}%</span>
                </div>
                <div className="parameter-item">
                    <label htmlFor="windSpeed">Wind Speed:</label>
                    <span id="windSpeed">{windSpeed} m/s</span>
                </div>
                <div className="parameter-item">
                    <label htmlFor="realFeel">Real Feel:</label>
                    <span id="realFeel">{realFeel}°C</span>
                </div>
                <div className="parameter-item">
                    <label htmlFor="cloudiness">Cloudiness:</label>
                    <span id="cloudiness">{cloudiness}%</span>
                </div>
            </div>
            {showSeeMore && <WeatherModalDetail data={data} onClose={() => setShowSeeMore(false)} />}
        </div>
    );
}

