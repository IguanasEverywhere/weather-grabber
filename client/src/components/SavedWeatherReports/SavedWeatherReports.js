import styles from './SavedWeatherReports.module.css';
import { useState } from 'react';

const SavedWeatherReports = () => {

  const [savedWeather, setSavedWeather] = useState([]);

  const handleRetrieveClick = () => {
    fetch('http://localhost:5555/api/saved-weather-data')
      .then(r => r.json())
      .then(reports => setSavedWeather(reports))
  }

  console.log(savedWeather)

  return (
    <div className={styles.containerCard}>
      <p>SavedWeatherReports</p>
      <button onClick={handleRetrieveClick}>Retrieve Saved Reports</button>
    </div>
  )
}

export default SavedWeatherReports;