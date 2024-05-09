import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather (props){
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState (props.defaultcity);

function displayResponse (response){
    console.log(response.data);
    setWeatherData({
        ready: true,
        temperature: response.data.temperature.current,
        temperatureFeel: response.data.temperature.feels_like,
        humidity:  response.data.temperature.humidity,
        description: response.data.condition.description,
        wind: response.data.wind.speed,
        city: response.data.city,
        date: new Date (response.data.time*1000),
        icon:response.data.condition.icon
       
    });
}
function search(){
    const apiKey ="2c9e95a4078b004c2cb60t37off36a27";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayResponse);
}

function handleSubmit(event){
    event.preventDefault();
    search();
}

function updateSearch (event){
    setCity(event.target.value);
}

if (weatherData.ready){
    return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row mt-3">
                    <div className="col-9">
                <input
                type="search"
                placeholder="Enter a city.."
                className="form-control" 
                autoFocus="on"
                onChange={updateSearch}/>
                </div>
                <div className="col-3">
                <input
                type="submit"
                value="Search"
                className="btn btn-primary" />
                </div>
                </div>
            </form>
            <WeatherInfo data={weatherData}/>
           
        </div>
    );

}else{
    search();
    return "loading.." ;  
}

   
}