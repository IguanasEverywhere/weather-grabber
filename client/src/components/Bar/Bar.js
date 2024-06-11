import styles from './Bar.module.css';

const Bar = ({ temp, time }) => {

  return (
    // probably won't work well for extremely high or low temps
    <div className={styles.bar} style={{ width: `${(temp / 100) * 100}%` }}>
      <p style={{ fontStyle: "italic", fontWeight: 200 }}>{time}</p>
      <h3>{temp}°</h3>
    </div>
  )
}

export default Bar;