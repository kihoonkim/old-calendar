import styles from './CalendarMeno.module.css'
import {getNumberOfDaysInMonth} from "../../utils/calendar-util.ts";

interface Props {
  year: number
  month: number
}
function CalendarMemo({ year, month }: Props) {
  const lastDate = getNumberOfDaysInMonth(year, month)
  const style = { "--date-count": lastDate+1 } as React.CSSProperties;

  return (
    <div className={styles.container} style={style}>
      <div className={styles.title}>{`M\nE\nM\nO`}</div>
      {new Array(lastDate).fill(0).map((_, i) => (
        <div className={styles.date} key={i}>
          <div>{i+1}</div>
          <div></div>
        </div>
      ))}
    </div>
  );
}

export default CalendarMemo;
