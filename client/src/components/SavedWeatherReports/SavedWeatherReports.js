import styles from './SavedWeatherReports.module.css';
import { useState } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';

const SavedWeatherReports = () => {

  const [savedWeather, setSavedWeather] = useState([]);

  const handleRetrieveClick = () => {
    fetch('http://localhost:5555/api/saved-weather-data')
      .then(r => r.json())
      .then(reports => setSavedWeather(reports))
  }

  return (
    <div className={styles.containerCard}>
      <div className={styles.containerTop}>
        <h3>Saved Weather Reports</h3>
        <p>Click Button to Retrieve Saved Weather Reports!</p>
      </div>
      <div className={styles.buttonsArea}>
        <button onClick={handleRetrieveClick}>Retrieve Saved Reports</button>
      </div>
      <div className={styles.reportCardsArea}>
        {savedWeather.length === 0 ? null :
          savedWeather.map((report) => <WeatherCard
            key={report.id}
            time={report.timestamp}
            temp={report.temperature}
            weatherCode={report.weather_code}
          />)}
      </div>

    </div>
  )
}

export default SavedWeatherReports;