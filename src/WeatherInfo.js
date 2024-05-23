import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";
import WeatherFeel from "./WeatherFeel";



export default function WeatherInfo (props){
    return(
        <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <div className="row">
        <div className="col-4 box-tepi">
            <div className="clearfix">
            <p className="shape-1"><br/></p>
            <li className="CurrentTimeDisplay"><FormattedDate date={props.data.date} /></li>
              
                <WeatherIcon code={props.data.icon} size={80} className="float-left"/>
                <WeatherUnit temptUnit={props.data.temperature}/> 
                <li className="text-capitalize">{props.data.description}</li>
            </div>  
        </div>
        <div className="col-4 box-kanan">
        <ul className="DetailsInfo">
            <li><WeatherFeel temptFeel={props.data.temperatureFeel} /></li>       
            <li className="HumidityDisplay">Humidity:{""}{props.data.humidity}{""}% </li>
            <li className="WindDisplay">Wind:{""}{props.data.wind}{""}km/h </li>
        </ul>
    </div>
</div>
    </div>
    );
}