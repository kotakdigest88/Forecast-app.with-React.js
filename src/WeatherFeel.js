import React from "react";

export default function WeatherFeel(props){
  
        return (
            <div className="WeatherFeel">
                Temperature feels like {""}
                  <span className="temperatureFeel">{Math.round(props.temptFeel)}</span>
                  <span className="unitFeel">°C </span>
                  </div>
        );
        
    
   
}