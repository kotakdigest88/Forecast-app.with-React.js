import React, {useState} from "react";

export default function WeatherUnit(props){
    const [unit, setUnit] = useState ("celsius");

    function showFahrenheit (event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelcius (event){
        event.preventDefault();
        setUnit ("celsius");
    }
    if (unit === "celsius"){
        return (
            <div className="WeatherTemperature">
            <span className="temperature">{Math.round(props.temptUnit)}</span>
            <span className="unit">°C | <a href="/" onClick={showFahrenheit} >°F</a> </span>
             <div className="temperatureFeel">Feels like: {Math.round(props.temptUnit)}°C </div>
        </div>
        )
    }else{
let fahrenheit = (props.temptUnit)* 9/5 + 32;

        return (
            <div className="WeatherTemperature">
            <span className="temperature">{Math.round(fahrenheit)}</span>
            <span className="unit"> <a href="/" onClick={showCelcius} >°C </a> | °F </span>
             <div className="temperatureFeel">Feels like: {Math.round(fahrenheit)}°F</div>
        </div>
        )
    }
  
}