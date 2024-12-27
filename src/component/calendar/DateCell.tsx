import styles from './DateCell.module.css'
import {DateInfoType} from "../../types/date-type.ts";

interface Props {
  month: number
  dateInfo: DateInfoType
  small?: boolean
}

function DateNumber ({ month, dateInfo, small }: Props) {
  if (month != dateInfo.month) {
    if (small) return <></>
    return <span className={styles['date-other-month']}>{dateInfo.date}</span>
  }
  else if(dateInfo.holiday?.length > 0 || dateInfo.day == 0) {
    return <span className={styles['date-holiday']}>{dateInfo.date}</span>
  } else if(dateInfo.day == 6) {
    return <span className={styles['date-saturday']}>{dateInfo.date}</span>
  }
  return <span className={styles['date-weekday']}>{dateInfo.date}</span>
}

export default function DayCell({ month, dateInfo, small = false }: Props) {
  return (
    <div className={styles[small ? 'container-small' : 'container']}>
      <DateNumber month={month} dateInfo={dateInfo} small={small} />
      { !small && (<div className={styles.note}>{dateInfo.holiday.join(', ')}</div>)}
    </div>
  )
}
