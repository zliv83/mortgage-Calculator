import styles from './TermAndRate.module.scss';
import NumberField from '@/components/NumberField/NumberField';
import { useGlobalState } from '@/lib/gobalStateContext';

export default function TermAndRate() {
  const {
    mortgageTerm,
    setMortgageTerm,
    interestRate,
    setInterestRate,
    errors,
    errorText,
    handleNumberFieldErrorChange,
  } = useGlobalState();
  return (
    <div className={styles.flex}>
      <NumberField
        title="Mortgage Term"
        prefixText="years"
        prefixPosition="right"
        value={mortgageTerm}
        setValue={(value) =>
          handleNumberFieldErrorChange('mortgageTerm', value)
        }
        hasError={errors.mortgageTerm}
        errorText={errorText.mortgageTerm}
      />
      <NumberField
        title="Interest Rate"
        prefixPosition="right"
        prefixText="%"
        value={interestRate}
        setValue={(value) =>
          handleNumberFieldErrorChange('interestRate', value)
        }
        hasError={errors.interestRate}
        errorText={errorText.interestRate}
      />
    </div>
  );
}
