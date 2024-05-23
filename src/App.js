import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
  <div className="App">
    <div className="container">
     <Weather defaultcity="Melaka" />
     <footer>Coded by {""}
       <a href="https://github.com/kotakdigest88" target="_blank" rel="noreferrer">nsalina</a>{""}
     and it is{""}
      <a href="https://github.com/kotakdigest88/shecodereact" target="_blank" rel="noreferrer">
      {""}  open-sources
        </a> 
      {""}  on gitHub</footer>
  </div> 
  </div>
  );
}

export default App;
