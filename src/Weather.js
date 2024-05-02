import "./Weather.css";

export default function Weather (){
    return(
    <div className="Weather">
            <h1>Weather Checker</h1>
        <form>
            <div className="row">
                <div className="col-9">
          <input type="search" placeholder="Enter a location.." className="form-control" />
          </div>
          <div className="col-3">
          <input type="submit" value="Search" className="btn btn-success w-100" autoFocus="on"/>
          </div>
          </div>
       </form>
       <h2>Kuala Lumpur</h2>
       <ul>
        <li>Saturday 15:00</li>
        <li>Mostly Sunny</li>
       </ul>
       <div className="row mt-3">
        <div className="col-6">
            <div className="clearfix">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly sunny" className="float-left" />
            <span className="temperature">33</span>
            <span className="unit">°C</span>
        </div>
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