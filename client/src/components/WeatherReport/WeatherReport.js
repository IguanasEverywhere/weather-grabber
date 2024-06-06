import styles from './WeatherReport.module.css';

const WeatherReport = ({time, temp, weather_code}) => {
  return (
    <div className={styles.containerCard}>
      <h3>{time}</h3>
      <p>{temp}</p>
      <p>{weather_code}</p>
    </div>
  )
}

export default WeatherReport;