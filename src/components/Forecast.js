import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Forecast({ city }) {
  const [weathers, setWeathers] = useState([]);

  useEffect(() => {
    getForecast();
  }, []);

  const getForecast = () => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: { q: city, days: "5" },
      headers: {
        "x-rapidapi-key": "c6e6fcdf32msh4da59f020dcf190p1228adjsn2f512fffebc9",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setWeathers(response.data.forecast.forecastday);
      })
      .catch(function (error) {
        setWeathers([]);
      });
  };

  return (
    <div className="days">
      {weathers.length > 0 &&
        weathers.map((weather) => (
          <div className="day">
            <h2>{weather.day.maxtemp_c}&deg; C</h2>
          </div>
        ))}
    </div>
  );
}
