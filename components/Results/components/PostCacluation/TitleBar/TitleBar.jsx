import styles from './Titlebar.module.scss';

export default function TitleBar() {
  return (
    <div className={styles.titleBar}>
      <span className={styles.header}>Your results</span>
      <span className={styles.text}>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </span>
    </div>
  );
}
