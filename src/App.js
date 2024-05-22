import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
  <div className="App">
    <div className="container">
     <Weather defaultcity="Melaka" />
     <footer>Coded by <a href="https://github.com/kotakdigest88">nsalina</a> and it is <a href="https://github.com/kotakdigest88/shecodereact">open-sources</a> on gitHub</footer>
  </div> 
  </div>
  );
}

export default App;
