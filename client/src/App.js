import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import LastFiveDays from './components/LastFiveDays/LastFiveDays';
import SavedWeatherReports from './components/SavedWeatherReports/SavedWeatherReports';
import { useEffect, useState } from 'react';

function App() {



  const [weatherData, setWeatherData] = useState({
    currentTime: null,
    currentTemp: null,
    currentWeatherCode: null,
    daily: {}
  });

  useEffect(() => {
    console.log("fetching...")
    fetch('https://api.open-meteo.com/v1/gfs?latitude=52.52&longitude=13.41&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max&temperature_unit=fahrenheit&timezone=America%2FChicago&past_days=4&forecast_days=1')
      .then(r => r.json())
      .then(currentData => {
        setWeatherData({
          currentTime: currentData.current.time,
          currentTemp: currentData.current.temperature_2m,
          currentWeatherCode: currentData.current.weather_code,
          daily: currentData.daily
        })
      })
  }, [])


  return (
    <div className="App">
      <div className="main-container">
        Weather grabber
        <CurrentWeather weatherData={weatherData} />
        <LastFiveDays daily={weatherData.daily} />
        <SavedWeatherReports />
      </div>
    </div>
  );
}

export default App;
