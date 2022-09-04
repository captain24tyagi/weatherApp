import React, { useState }from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=93038add5dfd23c88f0540da67369628&units=metric`;

  const searchLocation = (event) =>{
    if(event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  
  return (
    <div className="app">
     <div className="search">
       <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text" />
     </div>
      <div className="container">
        <div className="top">
          <div className='location'>
           <p>{data.name}</p>
          </div>
          <div className='temp'>
           {data.main ? <h1>{data.main.temp}°c</h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
          <div className='max'>
            {data.main ? <p>Min:  {data.main.temp_min}°c</p> : null}
            {data.main ? <p>Max:  {data.main.temp_max}°c</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className='feels'>
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°c</p> : null}
            <p>Feels like</p>
          </div>
          <div className='humidity'>
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className='wind'>
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
