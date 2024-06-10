import styles from './CurrentWeather.module.css';
import WeatherCard from '../WeatherCard/WeatherCard';

const CurrentWeather = ({ weatherData, handleLiveClick, liveUpdate }) => {

  const handleSaveSnapshotClick = () => {

    let weatherSnapshot = {
      "temperature": weatherData.currentTemp,
      "timestamp": weatherData.currentTime,
      "weather_code": weatherData.currentWeatherCode
    }

    fetch('http://localhost:5555/api/saved-weather-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(weatherSnapshot)
    }).then(r => {
      if (r.status === 200) {
        alert("Weather Snapshot Succesfully Saved to DB!")
      } else {
        alert(`Save to DB failed. Error code: ${r.status}`)
      }
    })
  }

  return (
    <div className={styles.containerCard}>
      <h3>Current Weather</h3>
      <div className={styles.cardBody}>
        <WeatherCard
          time={weatherData.currentTime}
          temp={weatherData.currentTemp}
          weatherCode={weatherData.currentWeatherCode}
        />
      </div>
      <div className={styles.buttonsArea}>
        <button onClick={handleSaveSnapshotClick}>Save Snapshot to DB</button>
        <button onClick={handleLiveClick}>Turn Live Update {liveUpdate === true ? "OFF" : "ON"}</button>
      </div>
    </div>
  )
}

export default CurrentWeather;