import React, { useState } from "react";
import City from "./components/City";
import FiveDay from "./components/FiveDay";
import Today from "./components/Today";

export default function App() {
  const [showCity, setShowCity] = useState(true);
  const [selectedCity, setSelectedCity] = useState("");

  const selectCity = (city) => {
    setShowCity(false);
    setSelectedCity(city);
  };

  return (
    <div className="app">
      {showCity && <City selectCity={selectCity} />}
      {!showCity && <Today city={selectedCity} />}
      {!showCity && <FiveDay city={selectedCity} />}
    </div>
  );
}
