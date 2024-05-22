import React, {useState} from "react";

export default function WeatherFeel(props){
    const [unit, setUnit] = useState("celcius");
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelcius(event){
        event.preventDefault();
        setUnit("celcius")
    }


    if (unit==="celcius"){
        return (
            <div className="WeatherFeel">
                Temperature feels like {""}
                  <span className="temperatureFeel">{Math.round(props.temptFeel)}</span>
                  <span className="unitFeel">°C </span>
                  </div>
        );
        
    }
   
}