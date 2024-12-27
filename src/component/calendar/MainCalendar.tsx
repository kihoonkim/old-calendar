import styles from './MainCalendar.module.css'
import DaysOfWeek from "./DaysOfWeek.tsx";
import DayCell from "./DateCell.tsx";
import {getDateOfMonth} from "../../utils/calendar-util.ts";

interface Props {
  year: number;
  month: number;
}

function MainCalendar({year, month}: Props) {
  const dates = getDateOfMonth(year, month)
  return (
    <div className={styles.container}>
      <DaysOfWeek />
      {dates.map((date, i) => (
        <DayCell key={i} month={month} dateInfo={date}/>
      ))}
    </div>
  );
}

export default MainCalendar;
