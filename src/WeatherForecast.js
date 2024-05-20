import React, {useState} from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState (false);
    let [forecast, setForecast] = useState(null);
    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

   
if (loaded){
    console.log(forecast);
    return(
        <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function(dailyForecast, index){
                if (index > 0 && index < 6){
                    return(
                        <div className="col" key={index}>
                        <WeatherForecastDay dailydata={dailyForecast} />
                        </div>
                    );
                }else{
                    return null;
                }
               
            })}                   
        </div>
    </div>
  
);
  
}else{
   
    let apiKey ="2c9e95a4078b004c2cb60t37off36a27";
    let lat= props.coordinate.latitude ;
    let lon= props.coordinate.longitude ;
    let apiUrl =`https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
}
}

