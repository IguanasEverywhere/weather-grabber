const WeatherCard = ({time, temp, weatherCode}) => {

  return (
    <div>
      <p>{time}</p>
      <p>{temp}</p>
      <p>{weatherCode}</p>
    </div>
  )
}

export default WeatherCard;