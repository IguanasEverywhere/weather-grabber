import styles from './WeatherCard.module.css';

const WeatherCard = ({time, temp, weatherCode}) => {
  let timeObj = new Date(time);

  return (
    <div className={styles.containerCard}>
      <p>{timeObj.toLocaleString()}</p>
      <p>{temp}° F</p>
      <p>{weatherCode}</p>
    </div>
  )
}

export default WeatherCard;