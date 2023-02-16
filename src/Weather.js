import React, {useState} from "react";
import "./weather.css";
import axios from "axios"
import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props) {
    const [weatherData, setweatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultcity);      
    
        
    function handleResponse(response) { 
        
        
        setweatherData({
            ready: true, 
            coordinates: response.data.coordinates,
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            city: response.data.city,
            humidity: response.data.temperature.humidity,
            description:response.data.condition.description,
            icon: response.data.condition.icon,
            date: new Date(response.data.time * 1000)
        });
       
    };
   
    function search(){
     const apiKey = "ft2ff28777530dba3dddb311o0464bef"
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse) 
}
    

    function handleSubmit(event) {
        event.preventDefault();
       search()
    };

    function handleCityChange(event) {
        setCity(event.target.value)  
        
    }

    if(weatherData.ready){
 return (
     <div className="weather" >
        
            <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-sm-9">
                        <input type="search" placeholder="Enter a city" className="form-input"
                         autoFocus="on"
                         onChange={handleCityChange}
                     />
                </div>
                <div className="col-sm-3">
                    <input type="submit" value="search" className="btn btn-primary w-100" />
                    </div>
                </div>
         </form>
         <Weatherinfo data={weatherData} />
         <WeatherForecast coordinates={weatherData.coordinates } />
        

       </div>
    )

    }
    else {   
    search()
        return "Loading..."
        
    }
   
}