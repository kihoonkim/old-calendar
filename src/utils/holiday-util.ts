type Holiday = { [key: string]: string };
const KOR_HOLIDAY: Holiday = {
  '01/01': '신정',
  '03/01': '3·1절',
  '05/05': '어린이날',
  '06/06': '현충일',
  '08/15': '광복절',
  '10/03': '개천절',
  '10/09': '한글날',
  '12/25': '크리스마스',
}

const HOLIDAY_2025: Holiday = {
  '2025/01/28': '설날 연휴',
  '2025/01/29': '설날',
  '2025/01/30': '설날 연휴',
  '2025/03/03': '대체공휴일(3·1절)',
  '2025/05/05': '부처님 오신날',
  '2025/05/06': '대체공휴일(부처님 오신날)',
  '2025/10/05': '추석연휴',
  '2025/10/06': '추석',
  '2025/10/07': '추석연휴',
  '2025/10/08': '대체공휴일(추석연휴)',
}
function lpad(num: number): string {
  return `${num}`.padStart(2, '0');
}
export function getHoliday(year: number, month: number, date: number): string[] {
  const monthDate = `${lpad(month)}/${lpad(date)}`;
  const yearMonthDate = `${year}/${monthDate}`;
  const holiday = []
  if (KOR_HOLIDAY[monthDate]) {
    holiday.push(KOR_HOLIDAY[monthDate]);
  }
  if (HOLIDAY_2025[yearMonthDate]) {
    holiday.push(HOLIDAY_2025[yearMonthDate]);
  }
  return holiday
}
