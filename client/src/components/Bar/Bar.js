import styles from './Bar.module.css';

const Bar = ({ temp, time }) => {

  return (
    <div className={styles.bar} style={{color: "red", width:`${(temp/100)*100}%`}}>
      <p>{time}</p>
      <p>{temp}°</p>
    </div>
  )
}

export default Bar;