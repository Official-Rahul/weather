import React, { useState } from "react";
import City from "./components/City";
import Forecast from "./components/Forecast";
import Today from "./components/Today";

export default function App() {
  const [showCity, setShowCity] = useState(true);
  const [showForecast, setShowForecast] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const selectCity = (city) => {
    setShowCity(false);
    setSelectedCity(city);
  };

  return (
    <div className="app">
      {showCity && <City selectCity={selectCity} />}
      {!showCity && <Today city={selectedCity} />}
      {!showCity && showForecast && <Forecast city={selectedCity} />}
    </div>
  );
}
