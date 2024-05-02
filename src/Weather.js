
export default function Weather (){
    return(
    <div className="App">
            <h1>Weather Checker</h1>
        <form>
            <div className="row">
                <div className="col-9">
          <input type="search" placeholder="Enter a location.." className="form-control"/>
          </div>
          <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
          </div>
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