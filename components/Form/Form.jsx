'use client';
import styles from './Form.module.scss';
import TitleBar from './components/TitleBar/TitleBar';
import NumberField from '../NumberField/NumberField';
import TermAndRate from './components/TermAndRate/TermAndRate';
import RadioButtons from './components/RadioButtons/RadioButtons';
import Button from '../Button/Button';
import { useGlobalState } from '@/lib/gobalStateContext';

export default function Form() {
  const {
    mortgageAmount,
    setMortgageAmount,
    errors,
    errorText,
    handleNumberFieldErrorChange,
  } = useGlobalState();
  return (
    <div className={styles.form}>
      <TitleBar />
      <NumberField
        title="Mortgage Amount"
        prefixText="$"
        value={mortgageAmount}
        setValue={(value) =>
          handleNumberFieldErrorChange('mortgageAmount', value)
        }
        hasError={errors.mortgageAmount}
        errorText={errorText.mortgageAmount}
      />
      <TermAndRate />
      <RadioButtons />
      <Button className={styles.button} />
    </div>
  );
}
