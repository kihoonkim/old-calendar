import styles from './App.module.css'
import TopHinge from "./component/layout/TopHinge.tsx";
import Month from "./component/calendar/Month.tsx";
import Advertise from "./component/advertise/Advertise.tsx";
import {useEffect, useState} from "react";
import dayjs, {Dayjs} from "dayjs";
import TaxScheduleInMonth from "./component/link/TaxScheduleInMonth.tsx";
import MainCalendar from "./component/calendar/MainCalendar.tsx";
import SmallCalendar from "./component/calendar/SmallCalendar.tsx";
import CalendarMemo from "./component/memo/CalendarMemo.tsx";


function App() {
  const [current, setCurrent] = useState<Dayjs>();

  useEffect(() => {
    setCurrent(dayjs())
  }, [])

  const handlePrevMonth = () => {
    if (!current) return
    setCurrent(current.subtract(1, "month"))
  }
  const handleNextMonth = () => {
    if (!current) return
    setCurrent(current.add(1, "month"))
  }

  if (!current) return <></>

  const year = current.year()
  const month = current.month() + 1

  const prev = current.subtract(1, "month")
  const next = current.add(1, "month")
  return (
    <div className={styles['root-container']}>
      <div className={styles.container}>
        <TopHinge />

        <div className={styles['month-container']}>
          <div className={styles['small-calendar']} onClick={handlePrevMonth}>
            <SmallCalendar year={prev.year()} month={prev.month() + 1}/>
          </div>
          <div className={styles['navigator-prev']} onClick={handlePrevMonth}>
            {'< 이전 달'}
          </div>

          <Month year={year} month={month}/>

          <div className={styles['small-calendar']} onClick={handleNextMonth}>
            <SmallCalendar year={next.year()} month={next.month() + 1}/>
          </div>
          <div className={styles['navigator-next']} onClick={handleNextMonth}>
            {'다음 달 >'}
          </div>
        </div>

        <div className={styles['main-calendar']}>
          <MainCalendar year={year} month={month} />
        </div>

        <CalendarMemo year={year} month={month} />
        <Advertise />
        <TaxScheduleInMonth year={year} month={month} />
      </div>
    </div>
  )
}


export default App
