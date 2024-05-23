import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
  <div className="App">
    <div className="container">
     <Weather defaultcity="Melaka" />
     <footer>Check the {""}
       <a href="https://github.com/kotakdigest88/shecodereact" target="_blank" rel="noreferrer">open-sources</a>
     {""}on github, coded by nsalina
      </footer>
  </div> 
  </div>
  );
}

export default App;
