import styles from './WeatherReport.module.css';

const WeatherReport = ({ time, temp }) => {
  return (
    <div className={styles.containerCard}>
      <h3>{time}</h3>
      <p>{temp}</p>
    </div>
  )
}

export default WeatherReport;