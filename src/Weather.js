import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather (props){
    const [weatherData, setWeatherData] = useState({ready: false});

function displayResponse (response){
    console.log(response.data);
    setWeatherData({
        ready: true,
        temperature: response.data.temperature.current,
        humidity:  response.data.temperature.humidity,
        description: response.data.condition.description,
        wind: response.data.wind.speed,
        city: response.data.city,
        date: "Wednesday 11:00",
        iconUrl: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-day.png"
       
    })
   

}
if (weatherData.ready){
    return(
        <div className="Weather">
            <form>
                <div className="row mt-3">
                    <div className="col-9">
                <input
                type="search"
                placeholder="Enter a city.."
                className="form-control" />
                </div>
                <div className="col-3">
                <input
                type="submit"
                value="Search"
                className="btn btn-primary" />
                </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <div className="clearfix">
                    <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left" />
                    <div className="float-left">
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="unit">°C</span>
                     </div>
                     </div>  
                </div>
                <div className="col-6">
                <ul>
                    <li>Humidity:{weatherData.humidity}% </li>
                    <li>Wind:{weatherData.wind}km/h </li>
                </ul>
            </div>
            </div>
        </div>
    );

}else{
    const apiKey ="2c9e95a4078b004c2cb60t37off36a27";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${props.defaultcity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayResponse);
}
return ("loading..")
;
   
}