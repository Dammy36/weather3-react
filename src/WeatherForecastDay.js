import React from "react";
import Weathericon from "./Weathericon";
export default function WeatherForecastDay(props) {
  function minTemperature() {
    let temperature = Math.round(props.temperature.minimum);
    return `${temperature}°`;
  }

  function maxTemperature() {
    let temperature = Math.round(props.temperature.maximum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDate();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <Weathericon code={props.data.condition.icon} size={36} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
