import styles from './ResultsBox.module.scss';
import { useGlobalState } from '@/lib/gobalStateContext';

export default function ResultsBox() {
  const { monthlyPayments, totalAmount, totalInterest, selectedValue } =
    useGlobalState();
  return (
    <div className={styles.resultsBox}>
      <div className={styles.box}>
        <span className={styles.header}>Your Repayments</span>
        <span className={styles.limeText}>{`$${monthlyPayments}`}</span>
      </div>
      <div className={styles.divider} />
      <div className={styles.box}>
        <span
          className={styles.header}
        >{`Total ${selectedValue === 'interestOnly' ? 'interest' : ''} you'll repay over the term`}</span>
        <span
          className={styles.whiteText}
        >{`$${selectedValue === 'interestOnly' ? totalInterest : totalAmount}`}</span>
      </div>
    </div>
  );
}
