import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Today({ city }) {
  const [todayWeather, setTodayWeather] = useState(null);

  useEffect(() => {
    getTodayWeather();
  }, []);

  const getTodayWeather = () => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: city },
      headers: {
        "x-rapidapi-key": "c6e6fcdf32msh4da59f020dcf190p1228adjsn2f512fffebc9",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setTodayWeather(response.data.current);
      })
      .catch(function (error) {
        console.error(error);
        setTodayWeather(null);
      });
  };

  return (
    <>
      {todayWeather && (
        <div className="today">
          <div className="temp">
            <h1>{todayWeather.temp_c}&deg; C</h1>
            <h3>Feels like {todayWeather.feelslike_c}&deg; C</h3>
          </div>
        </div>
      )}
      {todayWeather && (
        <div className="days">
          <div className="day">
            <h3>{todayWeather.humidity}</h3>
            <span>Humidity</span>
          </div>
          <div className="day">
            <h3>{todayWeather.wind_kph} kmph</h3>
            <span>Direction {todayWeather.wind_dir}</span>
          </div>
          <div className="day">
            <h3>{todayWeather.cloud} Cloudy</h3>
            <span>{todayWeather.condition.text}</span>
          </div>
        </div>
      )}
    </>
  );
}
