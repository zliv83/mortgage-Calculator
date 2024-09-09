import styles from './Card.module.scss';
import Form from '../Form/Form';
import Results from '../Results/Results';

export default function Card() {
  return (
    <div className={styles.card}>
      <Form />
      <Results />
    </div>
  );
}
