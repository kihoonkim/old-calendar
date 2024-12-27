import styles from './Month.module.css'

interface Props {
  year: number
  month: number
}

function Month({ year, month }: Props) {
  return (
    <div className={styles.container}>
      <span className={styles.month}>{month}</span>
      <span className={styles.year}>{year}</span>
    </div>
  );
}

export default Month;
