'use client';

import styles from './Results.module.scss';
import PostCalculation from './components/PostCacluation/PostCalculation';
import PreCalculation from './components/PreCaluclation/PreCalculation';
import { useGlobalState } from '@/lib/gobalStateContext';

export default function Results() {
  const { calculated } = useGlobalState();
  return (
    <div className={styles.results}>
      {calculated ? <PostCalculation /> : <PreCalculation />}
    </div>
  );
}
