import styles from './DaysOfWeek.module.css'
import {DAY_STRING} from "../../utils/calendar-util.ts";

function getStyle(day: number): string {
  if (day === 0) {
    return styles['sunday']
  } else if (day === 6) {
    return styles['saturday']
  } else {
    return styles['weekday']
  }
}

interface Props {
  small?: boolean
}
function DaysOfWeek({ small = false }: Props) {
  return (
    <>
      {
        Object.keys(DAY_STRING).map((day) => {
          const d = parseInt(day)
          const dayOfWeek = DAY_STRING[d];
          return <div className={`${styles[small ? 'container-small' : 'container']} ${getStyle(d)}`}>
            <span>{dayOfWeek.ch}</span>
            { !small && (<span className={styles['day-english']}>{dayOfWeek.en}</span>)}
          </div>
        })
      }
    </>
  );
}

export default DaysOfWeek;
