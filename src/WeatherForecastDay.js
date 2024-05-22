import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay (props){
    function maxTemperature(){
        let temperature = Math.round(props.dailydata.temperature.maximum);
        return (
            `${temperature}°`
        );
    }
    function minTemperature(){
        let temperature = Math.round(props.dailydata.temperature.minimum);
        return (
            `${temperature}°`
        );
    }
    function day(){
        let date = new Date(props.dailydata.time*1000);
        let day = date.getDay();
        let days =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        return days[day];
    }
    return (
        <div className="row">
            <div className="col-6"></div>
            <div className="col-6 center" >
            <div className="WeatherForecast-day">              
              
               <span className="DayDisplay">{day()} </span>   
               <span className="WeatherForecast-tempt-MaxMin">             
                <span className="WeatherForecast-temperature-max">{maxTemperature()}</span>{""}
                <span className="WeatherForecast-temperature-min">{minTemperature()}</span>
                </span>               
                <span className="IconDisplay"> <WeatherIcon code={props.dailydata.condition.icon} size={30}/></span>
                
                </div>
              
                
        </div>
            </div>
           
    );
}