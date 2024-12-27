import styles from "./SmallCalendar.module.css";
import DaysOfWeek from "./DaysOfWeek.tsx";
import DayCell from "./DateCell.tsx";
import {getDateOfMonth} from "../../utils/calendar-util.ts";
import dayjs from "dayjs";

interface Props {
  year: number;
  month: number;
}

function SmallCalendar({year, month}: Props) {
  const thisYear = dayjs().year();
  const dates = getDateOfMonth(year, month)
  return (
    <div className={styles.container}>
      <span className={styles.year}>{thisYear === year ? '' : year}</span>
      <span className={styles.month}>{month}</span>
      <div className={styles.calendar}>
        <DaysOfWeek small />
        {dates.map((date, i) => (
          <DayCell key={i} month={month} dateInfo={date} small />
        ))}
      </div>
    </div>
  );
}

export default SmallCalendar;
