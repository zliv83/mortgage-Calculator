import styles from './PostCalculation.module.scss';
import TitleBar from './TitleBar/TitleBar';
import ResultsBox from './ResultsBox/ResultsBox';

export default function PostCalculation() {
  return (
    <div className={styles.gap}>
      <TitleBar />
      <ResultsBox />
    </div>
  );
}
