import { useEffect, useState } from "react";

const URL_HOURLY_FORECAST_API = "api.openweathermap.org/data/2.5/forecast?";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function useWeather(city) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {   
        const fetchForecastData = async () => {
            try {
                const response = await fetch(`${URL_HOURLY_FORECAST_API}q=${city}&units=metric&appid=${API_KEY}`);
                const data = await response.json();

                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchForecastData();
    }, [city])

    return {data, isLoading, error};
}