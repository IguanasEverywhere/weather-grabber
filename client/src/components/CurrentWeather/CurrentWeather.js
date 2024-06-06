import styles from './CurrentWeather.module.css';

const CurrentWeather = ({weatherData}) => {

  return (
    <div className={styles.containerCard}>
      <p>Current Weather</p>
      <p>{weatherData.currentTime}</p>
      <p>{weatherData.currentTemp}</p>
      <p>{weatherData.currentWeatherCode}</p>
    </div>
  )
}

export default CurrentWeather;