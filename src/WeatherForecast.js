import React, { useState } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "ft2ff28777530dba3dddb311o0464bef";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;

    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=mmetric`;

    axios.get(apiUrl).then(handleResponse);
  }
}
