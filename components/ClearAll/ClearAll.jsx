import styles from './ClearAll.module.scss';
import { useGlobalState } from '@/lib/gobalStateContext';

export default function ClearAll() {
  const {
    calculated,
    setCalculated,
    setMortgageAmount,
    setMortgageTerm,
    setInterestRate,
    setErrors,
    setErrorText,
  } = useGlobalState();
  const handleClick = () => {
    if (calculated) {
      setMortgageAmount('');
      setMortgageTerm('');
      setInterestRate('');
      setErrors({
        mortgageAmount: false,
        mortgageTerm: false,
        interestRate: false,
      });
      setErrorText({
        mortgageAmount: '',
        mortgageTerm: '',
        interestRate: '',
      });
      setCalculated(false);
    }
  };
  return (
    <button className={styles.button} onClick={handleClick}>
      Clear All
    </button>
  );
}
