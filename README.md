# Weather Forecast

A React and Vite weather dashboard that shows current conditions, hourly forecasts, and a short daily forecast for a selected city. The app uses the OpenWeather API and starts with Ho Chi Minh City as the default location.

## Features

- Search weather by city.
- View current temperature, conditions, and weather parameters.
- Check the hourly forecast for the selected location.
- Review a summarized daily forecast for the coming days.
- Display loading and error states while data is being fetched.

## Tech Stack

- React 19
- Vite
- OpenWeather API
- ESLint

## Requirements

- Node.js 18 or newer
- An OpenWeather API key

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root and add your API key:

   ```bash
   VITE_WEATHER_API_KEY=your_openweather_api_key
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start the Vite development server.
- `npm run build` - Build the app for production.
- `npm run lint` - Run ESLint across the project.
- `npm run preview` - Preview the production build locally.

## Project Structure

- `src/components` - UI components for weather data, search, loading, and errors.
- `src/hooks` - Data fetching hooks for current, hourly, and daily weather information.
- `src/utils` - Shared helper data such as city lists and weather icons.
- `src/assets/styles` - Global and component-specific styles.

## Notes

- The app fetches weather data from OpenWeather using the `VITE_WEATHER_API_KEY` environment variable.
- Daily forecast data is grouped and summarized from the OpenWeather forecast response.
