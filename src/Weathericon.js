import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weathericon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "CLOUDY",
    "few-clouds-night": "CLOUDY",
    "scattered-clouds-day": "RAIN",
    "scattered-clouds-night": "RAIN",
    "broken-clouds-day": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "shower-rain-day": "SLEET",
    "shower-rain-night": "SLEET",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "WIND",
    "thunderstorm-night": "WIND",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="red"
      size={props.size}
      animate={true}
    />
  );
}
