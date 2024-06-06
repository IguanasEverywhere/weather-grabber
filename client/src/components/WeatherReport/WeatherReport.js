import styles from './WeatherReport.module.css';

const WeatherReport = ({time, temp, weather_code}) => {
  return (
    <div className={styles.containerCard}>
      <p>Current Weather</p>
      <p>{time}</p>
      <p>{temp}</p>
      <p>{weather_code}</p>
    </div>
  )
}

export default WeatherReport;