import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastHourly from "./components/ForecastHourly";
import WeatherParameters from "./components/WeatherParameters";
import ForecastDaily from "./components/ForecastDaily";
import { useState } from "react";
import useWeather from "./hooks/useWeather";
import useForecastHourly from "./hooks/useForecastHourly";
import ErrorDisplay from "./components/ErrorDisplay";
import LoadingDisplay from "./components/LoadingDisplay";
import "./assets/styles/global.css";

function App() {
  const [city, setCity] = useState("Ho Chi Minh City");
  const currentWeather = useWeather(city);
  const hourlyForecast = useForecastHourly(city);

  const isLoading = currentWeather.isLoading || hourlyForecast.isLoading;
  const error = currentWeather.error || hourlyForecast.error;

  return (
    <div className="app-container">
      <SearchBar selectCity={setCity} />
      {isLoading ? (
        <LoadingDisplay message="Loading weather data..." />
      ) : error ? (
        <ErrorDisplay message={`${String(error)}`} />
      ) : (
        <div className="dashboard-grid">
          <CurrentWeather city={city} data={currentWeather.data} />
          <ForecastHourly data={hourlyForecast.data} />
          <WeatherParameters data={currentWeather.data} />
          <ForecastDaily />
        </div>
      )}
    </div>
  );
}

export default App
