import styles from './LastFiveDays.module.css';
import WeatherReport from '../WeatherReport/WeatherReport';

const LastFiveDays = ({ daily }) => {

  let weatherObjs = [];

  // avoid breaking if daily hasn't come in yet
  if (Object.keys(daily).length > 0) {
    for (let i = 0; i < 5; i++) {
      let newObj = {
        time: daily.time[i],
        temp: daily.temperature_2m_max[i],
      }
      weatherObjs.push(newObj);
    }
  }

  return (
    <div className={styles.containerCard}>
      <p>Last Five Days</p>
      {weatherObjs.map((weatherObj) => {
        return <WeatherReport
          key={weatherObj.time}
          time={weatherObj.time}
          temp={weatherObj.temp}
        />
      })}
    </div>
  )
}

export default LastFiveDays;