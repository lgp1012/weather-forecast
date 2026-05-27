import useWeather from "../hooks/useWeather.js";

import rainIcon from "../assets/icons/rain.png";
import cloudyIcon from "../assets/icons/cloudy.png";
import sunIcon from "../assets/icons/sun.png";

export default function CurrentWeather({ city }) {
    const { data, isLoading, error } = useWeather(city);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{String(error)}</p>;
    if (!data) return <p>Không có dữ liệu thời tiết</p>;

    const tempC = data.main.temp;
    const weatherCurr = data.weather[0].main;

    const icons = {
        Rain: rainIcon,
        Clouds: cloudyIcon,
        Clear: sunIcon,
    }

    return (
        <div className="current-weather-container">
            <h2>{city}</h2>
            <p>{tempC}</p>
            <p>{weatherCurr}</p>
            <img src={icons[weatherCurr] ?? sunIcon} alt={weatherCurr} />
        </div>
    );
}