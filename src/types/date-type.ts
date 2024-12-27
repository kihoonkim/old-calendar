export type DateInfoType = {
  year: number; // 2025
  month: number; // 1-12
  date: number;  // 1-31
  day: number; // 0-6
  displayDay: DayType; // 일-토)
  holiday: string[];
};

export type DayType = {
  en: string;
  ko: string;
  ch: string;
}
