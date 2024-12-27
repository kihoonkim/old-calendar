import styles from './Advertise.module.css'

function Advertise() {
  return (
    <div className={styles.container}>
      <span>새해 福 많이 받으세요</span>
      <a href={'mailto://kihoon.dev@gmail.com'}>광고 문의</a>
    </div>
  );
}

export default Advertise;
