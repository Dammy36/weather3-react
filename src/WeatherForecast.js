import React from "react"
import Weathericon from "./Weathericon"
import "./WeatherForecast.css"
import  axios  from "axios";

export default function WeatherForecast(props) {

    function handleResponse(response) {
        console.log(response.data);
    }
    console.log(props)

    let apiKey = "ft2ff28777530dba3dddb311o0464bef"
    let longitude = props.coordinates.longitude
    let latitude= props.coordinates.latitude

    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);










    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Tue</div>
                    <Weathericon code="clear_sky_day" size={ 36} />
                    <div className="WeatherForecast-temperature">
                    <span className="WeatherForecast-temperature-max">19°</span>
                        <span className="WeatherForecast-temperature-min">10°</span>
                        </div>
            </div>
            </div>
        </div>
    )
}