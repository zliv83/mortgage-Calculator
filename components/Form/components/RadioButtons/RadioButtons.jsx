'use client';
import styles from './RadioButtons.module.scss';
import RadioButton from '@/components/RadioButton/RadioButton';
import { useGlobalState } from '@/lib/gobalStateContext';

export default function RadioButtons() {
  const { selectedValue, setSelectedValue } = useGlobalState();

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className={styles.container}>
      <span className={styles.text}>Mortgage Type</span>
      <RadioButton
        label="Repayment"
        name="paymentType"
        value="repayment"
        selectedValue={selectedValue}
        onChange={handleRadioChange}
      />
      <RadioButton
        label="Interest Only"
        name="paymentType"
        value="interestOnly"
        selectedValue={selectedValue}
        onChange={handleRadioChange}
      />
    </div>
  );
}
