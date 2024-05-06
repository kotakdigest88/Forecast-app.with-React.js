import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
  <div className="App">
    <div className="container">
     <Weather defaultcity="Melaka" />
     <footer>Coded by nsalina</footer>
  </div> 
  </div>
  );
}

export default App;
