
export default function Weather (){
    return(
    <div className="App">
            <h1>Weather Checker</h1>
        <form>
          <input type="search" placeholder="Enter a location.." className="form-control"/>
          <input type="submit" value="search" className="btn btn-primary" />
       </form>
       <h2>Kuala Lumpur</h2>
       <ul>
        <li>Saturday 15:00</li>
        <li>Mostly Sunny</li>
       </ul>
       <div className="row">
        <div className="col-6">
            <img src="#" alt="mostly sunny" />
            
        </div>
        <div className="col-6">
            <ul>
            <li>Precipitation: 10%</li>
            <li>Humidity: 13%</li>
            <li>Wind: 15km/h</li>
            </ul>
        </div>
       </div>
   </div>
    )
}