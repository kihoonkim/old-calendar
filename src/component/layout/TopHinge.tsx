import styles from './TopHinge.module.css'

function TopHinge() {
  return (
    <div className={styles.container}>
      <div className={styles.ring}></div>
      <div className={styles['inner-ring']}></div>
      <div className={styles.clip}></div>
    </div>
  );
}

export default TopHinge;
