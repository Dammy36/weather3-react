import React from "react";
import "./weather.css";

export default function Weather() {
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
            <h1>Lagos</h1>
            <ul>
                <li>Wednesday 5:00</li>
                <li>Partly  cloudy</li>
            </ul>
            <div className="row mt-3">
                <div className="col-sm-6"> 
                 <div className="clearfix">
                        <img
                            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="partly cloudy"                            
                       className="float-left"
                        />
                    
                    <span className="temperature">21</span>
                            <span className="unit">°C</span>           
                                               
                </div>
                </div>
                <div className="col-sm-6">
                    <ul>
                        <li>prescipition:15</li>
                        <li>Humidity:72%</li>
                        <li>Wind:13km/h</li>
                    </ul>
                    
                </div>
            </div>

       </div>
    )
}