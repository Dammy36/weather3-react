import React from "react";
import Convention from "./Convention";
import FormattedDate from "./FormattedDate";
import Weathericon from "./Weathericon";

export default function Weatherinfo(props) {
  return (
    <div className="weatherinfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-sm-6">
          <div className="clearfix  d-flex">
            <div className="float-left">
              <Weathericon code={props.data.icon} size={52} />
            </div>

            <div className="float-left number">
              <Convention celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>prescipition:15</li>
            <li>Humidity:{props.data.humidity}</li>
            <li>Wind:{props.data.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
