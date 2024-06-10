import styles from './WeatherCard.module.css';
import weatherCodeImgs from '../../weathercodes.json';

const WeatherCard = ({time, temp, weatherCode}) => {
  let timeObj = new Date(time);
  console.log(timeObj.getHours())
  let timeOfDay = (timeObj.getHours() < 6 || timeObj.getHours() > 18) ? "night" : "day"

  // a little bit hacky, maybe return to this
  let weatherCodeImg = weatherCodeImgs[0][timeOfDay].image;

  if (weatherCode) {
    weatherCodeImg = weatherCodeImgs[weatherCode][timeOfDay].image;
  }


  return (
    <div className={styles.containerCard}>
      <p>{timeObj.toLocaleString()}</p>
      <p>{temp}° F</p>
      <p>{weatherCode}</p>
      {/* You'll need to await this */}
      <img src={weatherCodeImg} alt="weather-code-icon"></img>
    </div>
  )
}

export default WeatherCard;