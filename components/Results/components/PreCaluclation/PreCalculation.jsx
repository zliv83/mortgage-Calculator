import styles from './PreCalculation.module.scss';
import Icon from './Icon';

export default function PreCalculation() {
  return (
    <div className={styles.preCalculation}>
      <Icon />
      <span className={styles.headerText}>Results shown here</span>
      <span className={styles.text}>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </span>
    </div>
  );
}
