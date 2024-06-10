import styles from './LastFiveDays.module.css';
import WeatherReport from '../WeatherReport/WeatherReport';
import Bar from '../Bar/Bar';

const LastFiveDays = ({ daily }) => {
  console.log(daily)

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
      <h3>Last Five Days</h3>

      <div className={styles.graph}>
        graph
        {weatherObjs.map((weatherObj) => {
          return <Bar
            key={weatherObj.time}
            temp={weatherObj.temp}
            time={weatherObj.time}
          />
        })}

      </div>



      {/* {weatherObjs.map((weatherObj) => {
        return <WeatherReport
          key={weatherObj.time}
          time={weatherObj.time}
          temp={weatherObj.temp}
        />
      })} */}
    </div>
  )
}

export default LastFiveDays;