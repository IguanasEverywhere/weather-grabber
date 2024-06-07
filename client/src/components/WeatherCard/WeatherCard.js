import styles from './WeatherCard.module.css';

const WeatherCard = ({time, temp, weatherCode}) => {

  return (
    <div className={styles.containerCard}>
      <p>{time}</p>
      <p>{temp}</p>
      <p>{weatherCode}</p>
    </div>
  )
}

export default WeatherCard;