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
                  <span className="temperatureFeel">{Math.round(props.temptFeel)}</span>
                  <span className="unitFeel">°C | <a href="/" onClick={showFahrenheit} >°F</a> </span>  
            </div>
        );
    }else{
        let fahrenheit = (props.temptFeel)* 9/5 + 32;
        return(
            <div className="WeatherFeel">
        <span className="temperatureFeel">{Math.round(fahrenheit)}</span>
        <span className="unitFeel">°C | <a href="/" onClick={showCelcius} >°F</a> </span>  
  </div> 
        );
        
    }
   
}