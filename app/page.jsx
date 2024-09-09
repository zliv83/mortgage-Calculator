import styles from './page.module.scss';
import Card from '@/components/Card/Card';

export default function Home() {
  return (
    <div className={styles.page}>
      <Card />
    </div>
  );
}
