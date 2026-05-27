import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("Ho Chi Minh City")
  return (
    <>
      <SearchBar selectCity={setCity} />
      <CurrentWeather city={city} />
    </>
  );
}

export default App
