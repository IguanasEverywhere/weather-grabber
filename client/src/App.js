import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import LastFiveDays from './components/LastFiveDays/LastFiveDays';
import SavedWeatherReports from './components/SavedWeatherReports/SavedWeatherReports';
import { useEffect, useState } from 'react';
import styles from './App.module.css';

function App() {

  const [weatherData, setWeatherData] = useState({
    currentTime: null,
    currentTemp: null,
    currentWeatherCode: null,
    daily: {}
  });

  const [liveUpdate, setLiveUpdate] = useState(true);

  useEffect(() => {
    getCurrentWeather();
    if (liveUpdate === true) {
      let update = setInterval(() => {
        getCurrentWeather();
      }, 60000)
      return () => clearInterval(update)
    }
  }, [liveUpdate])

  const getCurrentWeather = () => {
    console.log("fetching...")
    fetch('https://api.open-meteo.com/v1/gfs?latitude=52.52&longitude=13.41&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max&temperature_unit=fahrenheit&timezone=America%2FChicago&past_days=4&forecast_days=1')
      .then(r => r.json())
      .then(currentData => {
        setWeatherData({
          currentTime: new Date(currentData.current.time),
          currentTemp: currentData.current.temperature_2m,
          currentWeatherCode: currentData.current.weather_code,
          daily: currentData.daily
        })
      })
  }

  const handleLiveClick = () => {
    setLiveUpdate((prev) => !prev)
  }


  return (
    <div className={styles.app}>
      <div className={styles.titleContainer}>
        <h1>Weather Grabber🌤️</h1>
      </div>

      <div className={styles.topContainer}>
        <CurrentWeather
          weatherData={weatherData}
          handleLiveClick={handleLiveClick}
          liveUpdate={liveUpdate}
        />
        <LastFiveDays daily={weatherData.daily} />
      </div>
      <div className={styles.bottomContainer}>
        <SavedWeatherReports />
      </div>
    </div>
  );
}

export default App;
