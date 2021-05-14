import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Today() {
  const [todayWeather, setTodayWeather] = useState(null);

  useEffect(() => {
    getTodayWeather();
  }, []);

  const getTodayWeather = () => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: "London" },
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
    <div className="today">
      <div className="temp">
        {!todayWeather && <h1>{"loading..."}</h1>}
        {todayWeather && <h1>{todayWeather.temp_c}&deg; C</h1>}
      </div>
    </div>
  );
}
