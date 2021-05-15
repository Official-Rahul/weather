import React from "react";

export default function City({ selectCity }) {
  const cities = ["London", "Delhi", "Tokyo", "New York", "Sydney", "Moscow"];
  return (
    <div className="cities">
      {cities.map((city) => (
        <div className="city" onClick={() => selectCity(city)}>
          <h3>{city}</h3>
        </div>
      ))}
    </div>
  );
}
