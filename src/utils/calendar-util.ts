import {DateInfoType, DayType} from "../types/date-type.ts";
import dayjs, {Dayjs} from "dayjs";
import {getHoliday} from "./holiday-util.ts";

export const DAY_STRING: { [key: number]: DayType } = {
  0: { en: 'SUN', ko: '일', ch: '日'},
  1: { en: 'MON', ko: '월', ch: '月'},
  2: { en: 'TUE', ko: '화', ch: '火'},
  3: { en: 'WED', ko: '수', ch: '水'},
  4: { en: 'THU', ko: '목', ch: '木'},
  5: { en: 'FRI', ko: '금', ch: '金'},
  6: { en: 'SAT', ko: '토', ch: '土'},
}

export function getDisplayName(day: number): DayType {
  return DAY_STRING[day];
}

export function getDateOfMonth(year: number, month: number): DateInfoType[] {
  const firstDay = getFirstDate(year, month).day();
  const lastDate = getNumberOfDaysInMonth(year, month-1)
  const prevLastDate = getNumberOfDaysInMonth(year, month-1)

  const totalCellCount = firstDay + lastDate
  const rows = Math.floor(totalCellCount / 7) + Math.ceil((totalCellCount % 7) / 7)
  const cells = rows * 7

  const daysOfMonth: DateInfoType[] = []
  for (let i = 0; i < cells; i++) {
    const date = i - firstDay + 1;
    const day = i % 7
    if (i < firstDay) {
      daysOfMonth.push(buildDate(year, month - 1, prevLastDate + date, day))
    } else if (i >= lastDate + firstDay) {
      daysOfMonth.push(buildDate(year, month + 1, date - lastDate, day))
    } else {
      daysOfMonth.push(buildDate(year, month, date, day))
    }
  }

  return daysOfMonth;
}

function getFirstDate(year: number, month: number): Dayjs {
  return dayjs(new Date(year, month-1, 1))
}

export function getNumberOfDaysInMonth(year: number, month: number) {
  return dayjs(new Date(year, month, 1)).daysInMonth()
}

function buildDate(year: number, month: number, date: number, day: number): DateInfoType {
  const y = month < 1 ? year - 1 : month > 12 ? year + 1 : year
  const m = month < 1 ? 12 : month > 12 ? 1 : month

  return {
    year: y,
    month: m,
    date,
    day,
    displayDay: getDisplayName(day),
    holiday: getHoliday(year, month, date),
  }
}
