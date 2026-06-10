import { useEffect, useState } from "react";

const URL_HOURLY_FORECAST_API = "https://api.openweathermap.org/data/2.5/forecast?";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function useForecastHourly(city) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchForecastData = async () => {
            setLoading(true);
            setError(null);
            setData(null);

            try {
                const response = await fetch(`${URL_HOURLY_FORECAST_API}q=${city}&units=metric&appid=${API_KEY}`);
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data?.message || "Failed to fetch hourly forecast");
                }

                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchForecastData();
    }, [city])

    return {data, isLoading, error};
}