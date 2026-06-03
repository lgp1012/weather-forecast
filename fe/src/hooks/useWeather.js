import { useEffect, useState } from "react";

const URL_WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function useWeather(city) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            setLoading(true);
            setError(null);
            setData(null);

            try {
                const responseWeather = await fetch(`${URL_WEATHER_API}q=${city}&units=metric&appid=${API_KEY}`);
                const dataWeather = await responseWeather.json();

                if (!responseWeather.ok) {
                    throw new Error(dataWeather?.message || "Không có thông tin về địa điểm này");
                }

                setData(dataWeather);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, [city])

    return {data, isLoading, error};
}