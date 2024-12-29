import styles from './TaxScheduleInMonth.module.css'

interface Props {
  year: number;
  month: number;
}

export default function TaxScheduleInMonth({ year, month }: Props) {
  const m = `${month}`.padStart(2, '0')
  return (
    <div className={styles.container}>
      <div className={styles['public-link']}>
        <a href={`https://www.nts.go.kr/nts/ad/taxSchdul/selectList.do?taxYear=${year}&taxMonth=${m}`} target="_blank" rel="noopener noreferrer">이번달 세금 일정</a>
        <a href={'https://www.kita.net/cmmrcInfo/ehgtGnrlzInfo/rltmEhgt.do'} target="_blank" rel="noopener noreferrer">오늘의 환율</a>
      </div>

      <div className={styles['private-link']}>
        <a href={'https://forms.gle/3rGTVbdyQvEbMXDr8'} target="_blank" rel="noopener noreferrer">피드백</a>
        <a href={'https://github.com/kihoonkim/old-calendar'} target="_blank" rel="noopener noreferrer">깃허브</a>
        <a href={'https://descr.dev'} target="_blank" rel="noopener noreferrer">블로그</a>
      </div>
    </div>
  );
}
