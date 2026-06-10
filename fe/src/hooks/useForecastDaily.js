import { useEffect, useMemo, useState } from "react";
import useWeather from "./useWeather";
import weatherIcons from "../utils/weatherIcons";

const URL_DAILY_FORECAST_API = "https://api.openweathermap.org/data/2.5/forecast?";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

// Helper function to convert UNIX timestamp to a date key (e.g., "2024-06-30") based on timezone offset
function getDateKey(unixSeconds, timezoneOffsetSeconds = 0) {
  const date = new Date((unixSeconds + timezoneOffsetSeconds) * 1000);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Get the day label (e.g., "Mon", "Tue") for a given date key and timezone offset
function getDayLabel(dateKey, timezoneOffsetSeconds = 0) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day) + timezoneOffsetSeconds * 1000);

  return date.toLocaleDateString("en-US", {
    weekday: "short",
    timeZone: "UTC",
  });
}

// Get the most frequent weather condition from a list of forecast items
function getMostFrequentWeather(items) {
  const count = items.reduce((acc, item) => {
    const key = item.weather?.[0]?.main || "Clear";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(count).sort((a, b) => count[b] - count[a])[0] || "Clear";
}

export default function useForecastDaily(city) {
  const currentWeather = useWeather(city);

  const [forecastData, setForecastData] = useState(null);
  const [isForecastLoading, setIsForecastLoading] = useState(false);
  const [forecastError, setForecastError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchData = async () => {
      setIsForecastLoading(true);
      setForecastError(null);
      setForecastData(null);

      try {
        const response = await fetch(
          `${URL_DAILY_FORECAST_API}q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || "Failed to fetch daily forecast");
        }

        setForecastData(data);
      } catch (error) {
        setForecastError(error);
      } finally {
        setIsForecastLoading(false);
      }
    };

    fetchData();
  }, [city]);

  const data = useMemo(() => {
    if (!currentWeather.data || !forecastData?.list?.length) return null;

    const timezoneOffset = forecastData.city?.timezone || 0;

    const todayDateKey = getDateKey(currentWeather.data.dt, timezoneOffset);
    const todayWeatherMain = currentWeather.data.weather?.[0]?.main || "Clear";

    const today = {
      dateKey: todayDateKey,
      day: "Today",
      temp: Math.round(currentWeather.data.main?.temp ?? 0),
      weather: todayWeatherMain,
      weatherLabel: weatherIcons[todayWeatherMain]?.name || todayWeatherMain,
      icon: weatherIcons[todayWeatherMain]?.icon,
    };

    const groupedByDay = forecastData.list.reduce((acc, item) => {
      const dateKey = getDateKey(item.dt, timezoneOffset);
      if (!acc[dateKey]) acc[dateKey] = [];
      acc[dateKey].push(item);
      return acc;
    }, {});

    const nextDays = Object.keys(groupedByDay)
      .filter((dateKey) => dateKey > todayDateKey)
      .sort()
      .slice(0, 4)
      .map((dateKey) => {
        const items = groupedByDay[dateKey];
        const avgTemp =
          items.reduce((sum, item) => sum + item.main.temp, 0) / items.length;

        const weatherMain = getMostFrequentWeather(items);

        return {
          dateKey,
          day: getDayLabel(dateKey, timezoneOffset),
          temp: Math.round(avgTemp),
          weather: weatherMain,
          weatherLabel: weatherIcons[weatherMain]?.name || weatherMain,
          icon: weatherIcons[weatherMain]?.icon,
        };
      });

    return [today, ...nextDays];
  }, [currentWeather.data, forecastData]);

  return {
    data,
    isLoading: currentWeather.isLoading || isForecastLoading,
    error: currentWeather.error || forecastError,
  };
}