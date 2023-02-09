import React, {useState} from "react";
import "./weather.css";
import axios from "axios"


export default function Weather(props) {
    
    const [weatherData, setweatherData] = useState({ ready: false })
        ;
    function handleResponse(response) {
        console.log(response.data);
        setweatherData({
           ready:true, 
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            city: response.data.city,
            humidity: response.data.temperature.humidity,
            description: response.data.condition,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            date: "Wednesday 5:00"
        });
       
    }

    if(weatherData.ready){
 return (
        <div className="weather" >
            <form>
            <div className="row">
                <div className="col-sm-9">
                        <input type="search" placeholder="Enter a city" className="form-input"
            autoFocus="on"/>
                </div>
                <div className="col-sm-3">
                    <input type="submit" value="search" className="btn btn-primary w-100" />
                    </div>
                </div>
                </form>
         <h1>{weatherData.city }</h1>
            <ul>
             <li>{weatherData.date }</li>
             <li className="text-capitalize">{weatherData.description }</li>
            </ul>
            <div className="row mt-3">
                <div className="col-sm-6"> 
                 <div className="clearfix">
                        <img
                            src={weatherData.iconUrl} alt={weatherData.description}                           
                       className="float-left"
                        />
                    
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                            <span className="unit">°C</span>           
                                               
                </div>
                </div>
                <div className="col-sm-6">
                    <ul>
                        <li>prescipition:15</li>
                     <li>{weatherData.humidity }</li>
                     <li>{weatherData.wind }</li>
                    </ul>
                    
                </div>
            </div>

       </div>
    )

    }else{
    const apiKey = "ft2ff28777530dba3dddb311o0464bef"

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultcity}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
return "Loading..."
    }
   
}