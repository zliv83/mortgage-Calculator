import styles from './TitleBar.module.scss';
import ClearAll from '@/components/ClearAll/ClearAll';

export default function TitleBar() {
  return (
    <div className={styles.titleBar}>
      <span className={styles.title}>Mortgage Calculator</span>
      <ClearAll />
    </div>
  );
}
