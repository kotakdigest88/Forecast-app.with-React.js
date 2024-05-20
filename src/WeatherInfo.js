import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";
import WeatherFeel from "./WeatherFeel";


export default function WeatherInfo (props){
    return(
        <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <ul>
        <li><FormattedDate date={props.data.date} /></li>
        <li className="text-capitalize">{props.data.description}</li>
    </ul>
    <div className="row">
        <div className="col-6">
            <div className="clearfix">
                <WeatherIcon code={props.data.icon} size={60} className="float-left"/>
                <WeatherUnit temptUnit={props.data.temperature}/>
                        
             </div>  
        </div>
        <div className="col-6">
        <ul>
            <li>Temperature Feels:<WeatherFeel temptFeel={props.data.temperatureFeel}/></li>
            <li>Humidity:{props.data.humidity}% </li>
            <li>Wind:{props.data.wind}km/h </li>
        </ul>
    </div>
</div>
    </div>
    );
}