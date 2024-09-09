'use client';

import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import CalculatorIcon from '@/components/Button/CalculatorIcon';
import { useGlobalState } from '@/lib/gobalStateContext';

export default function Button({ className }) {
  const { calculated, setCalculated, validateInputs, calculateMortgage } =
    useGlobalState();
  const handleClick = () => {
    if (!calculated && validateInputs()) {
      calculateMortgage();
      setCalculated(true);
    }
  };
  return (
    <button className={`${styles.button} ${className}`} onClick={handleClick}>
      <CalculatorIcon />
      <span className={styles.text}>Calculate Payments</span>
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
};
